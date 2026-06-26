# Architecture

## Tier 1 - Presentation Layer

React application hosted on Amazon S3.

CloudFront distributes the static website globally.

## Tier 2 - Application Layer

Backend API deployed on AWS Elastic Beanstalk.

Application runs behind an Application Load Balancer.

Auto Scaling is enabled.

Environment variables are stored in Elastic Beanstalk.

## Tier 3 - Data Layer

MongoDB Atlas

Database access is restricted using MongoDB Atlas Network Access rules.

Backend communicates securely with MongoDB using a connection string stored as an environment variable.