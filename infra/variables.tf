variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "aws_profile" {
  type    = string
  default = "default"
}

variable "aws_account_id" {
  type    = string
  default = "252311082662"
}

variable "project_name" {
  type    = string
  default = "thepixardb"
}

variable "project_name_suffix" {
  type    = string
  default = "api"
}

variable "dynamo_table_movies_name" {
  type    = string
  default = "thepixardb_movies"
}
