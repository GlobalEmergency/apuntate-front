terraform {
  required_version = "~> 1.0"

  backend "s3" {
    bucket               = "iweb-terraform-state"
    dynamodb_table       = "terraform-state-lock"
    key                  = "terraform.tfstate"
    region               = "eu-west-1"
    workspace_key_prefix = "apuntate-front"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.32"
    }
  }
}
