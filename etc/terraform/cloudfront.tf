resource "aws_cloudfront_distribution" "this" {
  comment = aws_s3_bucket.this.bucket
  enabled = true

  aliases = [
    "${var.subdomain}.${var.domain}",
  ]

  http_version = "http2"

  default_root_object = "index.html"

  origin {
    origin_id   = "S3-${aws_s3_bucket.this.bucket}"
    domain_name = aws_s3_bucket.this.bucket_domain_name

    origin_access_control_id = aws_cloudfront_origin_access_control.this.id
  }

  default_cache_behavior {
    target_origin_id       = "S3-${aws_s3_bucket.this.bucket}"
    viewer_protocol_policy = "https-only"

    allowed_methods = [
      "GET",
      "HEAD",
    ]

    cached_methods = [
      "GET",
      "HEAD",
    ]

    forwarded_values {
      query_string = false

      headers = [
        "Access-Control-Request-Headers",
        "Access-Control-Request-Method",
        "Origin",
      ]

      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 31536000

    compress = true
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.globalemergency_online.arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

data "aws_acm_certificate" "globalemergency_online" {
  domain   = "${var.subdomain}.${var.domain}"
  statuses = ["ISSUED"]
  provider = aws.us-east-1
}

resource "aws_cloudfront_origin_access_control" "this" {
  name        = aws_s3_bucket.this.bucket
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
