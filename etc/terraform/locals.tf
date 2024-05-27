locals {
  name = "${var.service}-${var.environment}"
  default_tags = {
    Application = var.application
    Service     = var.service
    Environment = var.environment
    Owner       = var.owner

    CIA           = "lll"
    CriticalLevel = "l"

    CreatedBy = var.github_repository_name
  }
}

