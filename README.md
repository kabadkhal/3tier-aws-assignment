# 🚀 3-Tier AWS Web Application using Elastic Beanstalk

> A production-style 3-Tier Web Application deployed on AWS following cloud security best practices, high availability, and scalable architecture.

![AWS](https://img.shields.io/badge/AWS-Cloud-orange?style=for-the-badge&logo=amazonaws)
![React](https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb)
![Elastic Beanstalk](https://img.shields.io/badge/Deployment-Elastic%20Beanstalk-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Deployed-success?style=for-the-badge)

---

# 📖 Project Overview

This project demonstrates the deployment of a **secure, scalable, and highly available 3-Tier Web Application** on AWS.

The application follows modern cloud architecture by separating the application into:

- 🎨 Presentation Layer (Frontend)
- ⚙️ Application Layer (Backend APIs)
- 🗄️ Data Layer (MongoDB)

The backend is deployed using **AWS Elastic Beanstalk**, while the frontend is hosted on **Amazon S3** and delivered through **CloudFront** for faster global access.

---

# 🏗️ Architecture

```
                     Internet
                         │
                         ▼
                  Amazon CloudFront
                         │
                         ▼
                     Amazon S3
                  (React Frontend)
                         │
                         ▼
             Application Load Balancer
                         │
                         ▼
              AWS Elastic Beanstalk
             (Node.js + Express API)
                         │
                         ▼
                 MongoDB Atlas
               (IP Restricted Access)
```

---

# ☁️ AWS Services Used

| Service | Purpose |
|----------|----------|
| Amazon S3 | Static Website Hosting |
| CloudFront | Content Delivery Network |
| Elastic Beanstalk | Backend Deployment |
| EC2 | Application Hosting |
| Application Load Balancer | Traffic Distribution |
| Auto Scaling | High Availability |
| VPC | Network Isolation |
| Public Subnet | ALB & Frontend Access |
| Private Subnet | Backend Resources |
| Internet Gateway | Internet Connectivity |
| NAT Gateway | Secure Outbound Access |
| Security Groups | Firewall Rules |
| CloudWatch | Monitoring & Logs |
| IAM | Access Management |

---

# 💻 Technology Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB Atlas

### Cloud & DevOps
- AWS
- Elastic Beanstalk
- Git
- GitHub

---

# 📂 Project Structure

```
3tier-aws-assignment/
│
├── frontend/
│   ├── React Application
│   └── Static Assets
│
├── backend/
│   ├── Express Server
│   ├── Routes
│   ├── Controllers
│   └── MongoDB Connection
│
├── architecture/
│   └── AWS Architecture Diagram
│
├── screenshots/
│
└── README.md
```

---

# 🔄 Application Flow

1. User accesses the application.
2. CloudFront serves the React application from Amazon S3.
3. React sends API requests to the Application Load Balancer.
4. ALB forwards requests to Elastic Beanstalk.
5. Backend processes the request.
6. MongoDB stores/retrieves data.
7. Response is returned to the frontend.

---

# 🔐 Security Features

- Custom VPC
- Public & Private Subnets
- Application Load Balancer
- Security Groups
- MongoDB Atlas IP Whitelisting
- Environment Variables
- HTTPS Ready
- Least Privilege IAM

---

# 📈 High Availability

✅ Elastic Beanstalk

✅ Auto Scaling

✅ Application Load Balancer

✅ CloudFront CDN

✅ CloudWatch Monitoring

---

# 🚀 Deployment Steps

### Frontend

- Build React Application
- Upload build files to Amazon S3
- Configure Static Website Hosting
- Configure CloudFront Distribution

### Backend

- Create Elastic Beanstalk Environment
- Deploy Node.js Application
- Configure Environment Variables
- Enable Auto Scaling
- Configure Health Checks

### Database

- Create MongoDB Atlas Cluster
- Configure IP Access
- Store MongoDB URI in Environment Variables

---

# 📷 Screenshots

Add screenshots here.

```
screenshots/

Home Page

Dashboard

Elastic Beanstalk

CloudFront

MongoDB Atlas

AWS Architecture
```

---

# 📊 Deliverables

- ✅ Architecture Diagram
- ✅ Elastic Beanstalk Environment
- ✅ MongoDB Connectivity
- ✅ Deployment Steps
- ✅ Security Configuration

---

# 👨‍💻 Author

**Kartik Badkhal**

DevOps Engineer | AWS | Docker | Kubernetes | Terraform | Jenkins

GitHub: https://github.com/kabadkhal

LinkedIn: https://linkedin.com/in/kabadkhal

---

## ⭐ If you found this project helpful, don't forget to Star the repository!
