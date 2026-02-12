# 🚀 Registration Web Application

A full-stack Registration Web Application built using **FastAPI (Backend)** and **HTML, CSS, JavaScript (Frontend)**.

This project demonstrates user registration and login functionality with backend API integration and database connectivity.

---

## 📁 Project Structure

```
registration-web/
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   ├── requirements.txt
│   └── .env
│
└── forntend/
    ├── index.html
    ├── login.html
    ├── Register.html
    ├── registration.js
    └── style.css
```

---

## ⚙️ Technologies Used

### Backend

* FastAPI
* SQLAlchemy
* MySQL
* Pydantic
* Uvicorn
* python-dotenv

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)

---

## 🔌 Database Configuration

The database connection is configured using a `.env` file inside the `backend` folder.

Create a `.env` file and add:

```
DATABASE_URL=your_database_connection_string
```

Example:

```
DATABASE_URL=mysql+pymysql://username:password@localhost/database_name
```

---

## ▶️ How to Run Backend

1. Navigate to backend folder:

```
cd backend
```

2. Create virtual environment:

```
python -m venv venv
```

3. Activate virtual environment:

Windows:

```
venv\Scripts\activate
```

4. Install dependencies:

```
pip install -r requirements.txt
```

5. Run server:

```
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

API docs available at:

```
http://127.0.0.1:8000/docs
```

---

## 💡 Features

* User Registration
* User Login
* Backend API integration
* Database storage using SQLAlchemy ORM
* Environment-based database configuration

---

## 🤖 Development Note

The backend connection setup, API structuring guidance, and database configuration assistance were taken with help from **ChatGPT** as a learning and development support tool.

---

## 📌 Purpose

This project was created for learning and practice purposes to understand:

* FastAPI backend development
* Database integration using SQLAlchemy
* Environment variable management
* Frontend–Backend integration

---

