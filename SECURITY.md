# Security Explanation

VPC

Custom VPC with Public and Private Subnets.

Public Resources

- Application Load Balancer
- S3
- CloudFront

Private Resources

- Elastic Beanstalk EC2 Instances

Security Groups

ALB

Inbound

HTTP 80

HTTPS 443

EC2

Inbound

HTTP 80 from ALB Security Group only.

Environment Variables

Sensitive values are stored in Elastic Beanstalk Environment Variables.

Database

MongoDB Atlas uses username/password authentication and IP restrictions.