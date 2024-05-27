resource "aws_s3_bucket" "this" {
  bucket = "globalemergency-${local.name}"
}

data "aws_iam_policy_document" "bucket_policy" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.this.arn}/*"]

    condition {
      variable = "aws:SourceArn"
      test     = "StringEquals"
      values   = [aws_cloudfront_distribution.this.arn]
    }
  }
  statement {
    principals {
      type        = "AWS"
      identifiers = [aws_iam_role.github_actions.arn]
    }

    actions   = ["s3:*"]
    resources = ["${aws_s3_bucket.this.arn}/*"]
  }

}

resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.this.bucket
  policy = data.aws_iam_policy_document.bucket_policy.json
}
