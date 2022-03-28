module "lambda_api" {
  source           = "./modules/lambda"
  name             = "${var.project_name}-${var.project_name_suffix}"
  handler_path     = "src/server/lambda.handler"
  description      = "API Rest"
  runtime          = "nodejs14.x"
  timeout          = 30
  memory_size      = 1024
  role_arn         = aws_iam_role.this.arn
  log_retention    = 1
  filename         = data.archive_file.this.output_path
  source_code_hash = data.archive_file.this.output_base64sha256
  environment = {
    TABLE_MOVIES = var.dynamo_table_movies_name
  }
}

module "api_gw" {
  source          = "./modules/gateway"
  name            = "${var.project_name}-${var.project_name_suffix}"
  protocol        = "HTTP"
  stage_name      = "beta"
  log_retention   = 1
  integration_uri = module.lambda_api.lambda_arn
  function_name   = module.lambda_api.lambda_name
  timeout         = 30000

  depends_on = [module.lambda_api]
}
