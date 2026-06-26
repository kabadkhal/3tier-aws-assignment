# MongoDB Connectivity

MongoDB Atlas is used as the database layer.

Security Measures

- Connection string stored as Elastic Beanstalk Environment Variable.
- Database credentials are never committed to GitHub.
- Network Access configured using IP restrictions.
- Communication occurs over TLS.