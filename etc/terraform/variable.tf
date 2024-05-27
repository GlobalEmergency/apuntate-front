variable "owner" {
  default = ""
  type    = string
}

variable "application" {
  default     = "apuntate"
  description = "Name of your application"
  type        = string
}

variable "service" {
  default     = "apuntate-front"
  description = "Name of service in application"
  type        = string
}

variable "environment" {
  default     = "dev"
  description = "Environment"
  type        = string
}

variable "github_repository_name" {
  default     = "GlobalEmergency/apuntate-front"
  description = "Github repository name."
  type        = string
}

variable "region" {
  default     = "eu-west-1"
  description = "AWS region"
  type        = string
}

variable "domain" {
  description = "Domain name"
  type        = string
}

variable "subdomain" {
  description = "Subdomain name"
  type        = string
}
