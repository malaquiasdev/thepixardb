resource "aws_lambda_function" "this" {
  function_name    = var.name
  handler          = var.handler_path
  description      = var.description
  runtime          = var.runtime
  timeout          = var.timeout
  memory_size      = var.memory_size
  role             = var.role_arn
  filename         = var.filename
  source_code_hash = var.source_code_hash
  layers           = var.layers_arn

  dynamic "environment" {
    for_each = var.environment == null ? [] : [var.environment]
    content {
      variables = var.environment
    }
  }
}

resource "aws_cloudwatch_log_group" "this" {
  name              = format("/aws/lambda/%s", aws_lambda_function.this.function_name)
  retention_in_days = var.log_retention
  depends_on = [
    aws_lambda_function.this
  ]
}
