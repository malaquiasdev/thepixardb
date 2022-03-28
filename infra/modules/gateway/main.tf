resource "aws_apigatewayv2_api" "this" {
  name          = var.name
  protocol_type = var.protocol

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["HEAD", "OPTIONS", "GET"]
    allow_headers = ["*"]
    max_age       = 300
  }
}

resource "aws_apigatewayv2_stage" "this" {
  api_id      = aws_apigatewayv2_api.this.id
  name        = var.stage_name
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.this.arn

    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}

resource "aws_apigatewayv2_integration" "this" {
  api_id           = aws_apigatewayv2_api.this.id
  integration_type = "AWS_PROXY"

  integration_method     = "ANY"
  payload_format_version = "2.0"
  integration_uri        = var.integration_uri
  timeout_milliseconds   = var.timeout
}

resource "aws_apigatewayv2_route" "example" {
  api_id    = aws_apigatewayv2_api.this.id
  route_key = "ANY /{proxy+}"

  target = "integrations/${aws_apigatewayv2_integration.this.id}"
}

resource "aws_lambda_permission" "this" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = var.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.this.execution_arn}/*/*"
}

resource "aws_cloudwatch_log_group" "this" {
  name              = "/aws/api_gw/${aws_apigatewayv2_api.this.name}"
  retention_in_days = var.log_retention
}
