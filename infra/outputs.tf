output "lambda_arn" {
  description = "ARN of the Lambda"
  value       = try(module.lambda_api.lambda_arn, "")
}

output "lambda_name" {
  description = "Lambda Name"
  value       = try(module.lambda_api.lambda_name, "")
}
