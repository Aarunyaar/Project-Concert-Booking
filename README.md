# 🎵 Concert Booking System

A full-stack web application that allows users to browse concerts and book tickets online. Built with **Django REST Framework** (backend) and **React.js** (frontend), connected via REST APIs.

---

## 🚀 Features

- 🔐 User Registration and Login with authentication
- 🎤 Browse available concerts with details
- 🎟️ Book tickets for selected concerts
- 📋 View and manage personal bookings
- 🔌 REST API backend tested with Postman
- 📱 Responsive UI built with Bootstrap and CSS

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, JavaScript, HTML, CSS, Bootstrap |
| Backend | Python, Django, Django REST Framework |
| Database | MySQL, SQLite |
| API Testing | Postman |
| Version Control | Git, GitHub |

---

## 📁 Project Structure

Project-Concert-Booking/
│
├── manage.py                 # Django project manager
├── db.sqlite3                # SQLite database
│
├── App.js                    # Main React component
├── App.css                   # Main styles
├── App.test.js               # React tests
│
├── Login.js                  # Login page component
├── Register.js               # Registration page component
│
├── index.js                  # React entry point
├── index.css                 # Global styles
├── logo.svg                  # App logo
│
├── reportWebVitals.js        # Performance reporting
├── setupTests.js             # Test setup
├── package.json              # Node dependencies
└── README.md

---

## ⚙️ How to Run Locally

### Backend Setup

python manage.py migrate
python manage.py runserver

### Frontend Setup

npm install
npm start

The app runs at `http://localhost:3000` and API at `http://localhost:8000`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/register/ | Register new user |
| POST | /api/login/ | User login |
| GET | /api/concerts/ | Get all concerts |
| POST | /api/bookings/ | Book a concert ticket |
| GET | /api/bookings/ | Get user bookings |

---

## 👩‍💻 Developer

**Aarunya Retheep**
- 🔗 LinkedIn: https://linkedin.com/in/aarunya-retheep
- 🐙 GitHub: https://github.com/Aarunyaar
- 📧 Email: aarunyaretheep003@gmail.com

---

## 📄 License

This project is open source and available under the MIT License.