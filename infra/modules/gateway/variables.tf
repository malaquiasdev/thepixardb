variable "name" {
  description = "(Required) The name of the API. Must be less than or equal to 128 characters in length."
  type        = string
}

variable "protocol" {
  description = "(Required) The API protocol. Valid values: HTTP, WEBSOCKET."
  type        = string
}

variable "description" {
  description = "(Optional) The description of the API. Must be less than or equal to 1024 characters in length."
  type        = string
  default     = "Hello World"
}

variable "stage_name" {
  description = "(Required) The name of the stage. Must be between 1 and 128 characters in length."
  type        = string
}

variable "log_retention" {
  description = "(Optional) Specifies the number of days you want to retain log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 3653, and 0. If you select 0, the events in the log group are always retained and never expire."
  type        = number
  default     = 0
}

variable "integration_uri" {
  description = "(Required) ARN to be used for invoking Lambda Function from API Gateway"
  type        = string
}

variable "function_name" {
  description = "(Required) Name of the Lambda function whose resource policy you are updating"
  type        = string
}


variable "timeout" {
  description = "(Optional) Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs. Terraform will only perform drift detection of its value when present in a configuration."
  type        = number
  default     = 30000
}
