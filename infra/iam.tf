resource "aws_iam_role" "this" {
  name = "${var.project_name}-${var.project_name_suffix}-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy" "this" {
  name        = format("%s-trigger-transcoder", "${var.project_name}-${var.project_name_suffix}-policy")
  description = "Allow to access base resources and trigger transcoder"
  policy      = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "SomeVeryDefaultAndOpenActions",
            "Effect": "Allow",
            "Action": [
                "logs:*",
                "dynamodb:*"
            ],
            "Resource": [
                "arn:aws:logs:*:*:*",
                "arn:aws:dynamodb:${var.aws_region}:${var.aws_account_id}:table/${var.dynamo_table_movies_name}"
            ]
        }
    ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "dynamodb" {
  policy_arn = aws_iam_policy.this.arn
  role       = aws_iam_role.this.name
}
