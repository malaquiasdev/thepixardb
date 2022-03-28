variable "name" {
  description = "Name of the function"
  type        = string
}

variable "handler_path" {
  description = "Function entrypoint file path"
  type        = string
}

variable "description" {
  description = "(Optional) Description of what your Lambda Function does."
  type        = string
  default     = null
}

variable "filename" {
  description = "Path to the function's deployment package within the local filesystem. Conflicts with image_uri, s3_bucket, s3_key, and s3_object_version."
  type        = string
}

variable "source_code_hash" {
  description = "Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either filename or s3_key. The usual way to set this is filebase64sha256('file.zip') (Terraform 0.11.12 and later) or base64sha256(file('file.zip')) (Terraform 0.11.11 and earlier), where 'file.zip' is the local filename of the lambda function source archive."
  type        = string
}

variable "runtime" {
  description = "Identifier of the function's runtime"
  type        = string
  default     = "nodejs14.x"
}

variable "timeout" {
  description = "(Optional) Amount of time your Lambda Function has to run in seconds. Defaults to 3."
  type        = number
  default     = 3
}

variable "memory_size" {
  description = "(Optional) Amount of memory in MB your Lambda Function can use at runtime. Defaults to 1024."
  type        = number
  default     = 1024
}

variable "role_arn" {
  description = "Amazon Resource Name (ARN) of the function's execution role."
  type        = string
}

variable "layers_arn" {
  description = "(Optional) List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function."
  type        = list(string)
  default     = []
}

variable "environment" {
  description = "(Optional) Configuration block. Detailed below. Use locals.tf to populate it"
  type        = map(string)
  default     = null
}

variable "log_retention" {
  description = "(Optional) Specifies the number of days you want to retain log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 3653, and 0. If you select 0, the events in the log group are always retained and never expire."
  type        = number
  default     = 0
}
