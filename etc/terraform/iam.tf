resource "aws_iam_role" "github_actions" {
  name               = "gha-${local.name}"
  assume_role_policy = data.aws_iam_policy_document.github_action_access_assume_role.json
}

data "aws_iam_policy_document" "github_action_access_assume_role" {
  statement {
    effect = "Allow"
    principals {
      identifiers = ["arn:aws:iam::960349283643:oidc-provider/token.actions.githubusercontent.com"]
      type        = "Federated"
    }
    actions = ["sts:AssumeRoleWithWebIdentity"]

    condition {
      test     = "StringEquals"
      values   = ["sts.amazonaws.com"]
      variable = "token.actions.githubusercontent.com:aud"
    }

    condition {
      test     = "StringLike"
      values   = ["repo:${var.github_repository_name}:*"]
      variable = "token.actions.githubusercontent.com:sub"
    }
  }
}

data "aws_iam_policy_document" "github_access" {
  statement {
    effect = "Allow"
    actions = [
      "s3:*",
      "cloudfront:CreateInvalidation",
    ]
    resources = [
      aws_s3_bucket.this.arn,
      aws_cloudfront_distribution.this.arn,
    ]
  }
  statement {
    effect = "Allow"
    actions = [
      "sts:GetServiceBearerToken"
    ]
    resources = [
      "*"
    ]
  }
}

resource "aws_iam_policy" "github_access" {
  name   = "gha-${local.name}"
  policy = data.aws_iam_policy_document.github_access.json
}

resource "aws_iam_role_policy_attachment" "github_access" {
  role       = aws_iam_role.github_actions.name
  policy_arn = aws_iam_policy.github_access.arn
}
