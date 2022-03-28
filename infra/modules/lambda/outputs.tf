output "lambda_arn" {
  description = "ARN of the Lambda"
  value       = try(aws_lambda_function.this.arn, "")
}

output "lambda_version" {
  description = "Lambda Version"
  value       = try(aws_lambda_function.this.version, "")
}

output "lambda_name" {
  description = "Lambda Name"
  value       = try(aws_lambda_function.this.function_name, "")
}

output "lambda_cloudwatch_logs_arn" {
  description = "The arn of theh log group."
  value       = try(aws_cloudwatch_log_group.this.arn, "")
}

output "lambda_cloudwatch_logs_name" {
  description = "The name of the log group."
  value       = try(aws_cloudwatch_log_group.this.name, "")
}
