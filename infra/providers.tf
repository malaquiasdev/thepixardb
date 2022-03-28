provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile

  default_tags {
    tags = {
      Project   = "thepixardb"
      CreatedAt = formatdate("YYYY-MM-DD", timestamp())
      ManagedBy = "Terraform"
      Owner     = "Mateus Malaquias"
    }
  }
}
