# 🎓 Career Guidance Web App

A full-stack web application that helps students and parents discover colleges based on location, career interest, aptitude, and eligibility. Built with **HTML**, **CSS**, **JavaScript**, and **Firebase** for backend functionality.

---

## 🚀 Features

- 🔐 Student Login & Signup (Firebase Authentication)
- 🏫 College Signup & Listing (Firebase Firestore)
- 🌍 Location & Career-Based College Filtering (India & Abroad)
- 📄 Detailed College Info (Tuition, Hostels, Support Services)
- ✅ Eligibility Checking & Aptitude Test
- 📊 Aptitude Test (Verbal, Quantitative, GK MCQs)
- 🔒 Admin-side College Management
- 📁 Persistent User Session (localStorage)
- 🔔 Logging system for key user actions

---

## 🛠️ Tech Stack

| Frontend        | Backend       | Database       | Hosting         |
|-----------------|---------------|----------------|------------------|
| HTML, CSS, JS   | Firebase Auth | Firestore DB   | Firebase Hosting |

---

## 📁 Folder Structure

career-guidance-app/
│
├── css/ # All styles (style.css)
├── images/ # Icons, background, logos
├── js/ # All scripts (auth, logging, Firestore)
│ ├── firebase-config.js
│ ├── login.js
│ ├── signup.js
│ ├── colleges.js
│ └── log.js
│
├── index.htm # Landing page
├── login.htm # Student login
├── signup.htm # Student signup
├── college-signup.htm # College registration
├── career.htm # Career selection
├── location.htm # Location selection
├── colleges.htm # Filtered college list
├── register.htm # College registration form
├── aptitude.htm # Aptitude test page
├── result.htm # Test result display
└── README.md # This file
