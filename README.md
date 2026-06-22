# 🎓 Nexora Academy — Learning Management System

<div align="center">

![Nexora Academy Banner](https://via.placeholder.com/900x200/6366f1/ffffff?text=Nexora+Academy+LMS)

[![Frontend](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Backend](https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![Database](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![Auth](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**A full-stack Learning Management System built with React, Spring Boot, and MySQL.**

</div>

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Author](#author)
- [License](#license)

---

## 📖 About the Project

Nexora Academy is a fully functional **Learning Management System (LMS)** that allows students to enroll in courses, take assessments, earn certificates, and track their learning progress. Admins can manage courses, users, and content through a dedicated dashboard.

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure Login & Register with token-based auth
- 📚 **15+ Courses** — With images, instructor info, and pricing
- 📝 **Assessments** — 5 quiz questions per course
- 🏆 **Certificates** — Auto-generated on assessment completion
- 👤 **Student Profile** — Performance tracking and progress overview
- 💬 **Discussion Forum** — Course-level community discussions
- 🛠️ **Admin Dashboard** — Full control to manage users and courses
- 📱 **Fully Responsive** — Built with Tailwind CSS for all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Tailwind CSS |
| Backend | Spring Boot, Java |
| Database | MySQL |
| Auth | JWT (JSON Web Token) |
| API | RESTful APIs with Axios |

---

## 📁 Project Structure

```
Nexora-Academy/
├── frontend/          # React.js application
├── backend/           # Spring Boot REST API
└── lmsdatabase.sql    # MySQL database dump
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Java 17+
- MySQL 8+
- Maven

---

### 1️⃣ Database Setup

```sql
-- Import the SQL file in MySQL Workbench
source lmsdatabase.sql;
```

---

### 2️⃣ Backend Setup

```bash
cd backend

# Update your DB credentials in:
# src/main/resources/application.yml

mvn spring-boot:run
# Runs on http://localhost:8080
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
# Runs on http://localhost:3000
```

---

## 👨‍💻 Author

**Abdul Razak**

[![GitHub](https://img.shields.io/badge/GitHub-Abdul--razak98-181717?style=flat&logo=github)](https://github.com/Abdul-razak98)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-abdulrazak27-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/abdulrazak27/)
[![Instagram](https://img.shields.io/badge/Instagram-abdulrazak27__-E4405F?style=flat&logo=instagram)](https://www.instagram.com/abdulrazak27_/)

---

<div align="center">
  Made with ❤️ by Abdul Razak
</div>
