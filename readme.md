# AI Kata – Sweet Shop Management System

This project is a Sweet Shop Management System inspired by traditional Indian sweet shops (e.g., Pulla Reddy Sweets).  
It is a full-stack application consisting of a frontend SPA and a backend REST API.

---

## 🚀 Features

### Frontend
- Single Page Application (SPA)
- User login and registration
- Dashboard displaying available sweets
- Sweet cards with image, name, and quantity
- Purchase button disabled when quantity is zero
- Search functionality for sweets
- Clean, responsive, traditional Indian UI theme

### Backend
- REST API built using FastAPI
- Endpoints to:
  - Register users
  - Login users
  - Fetch available sweets
  - Purchase sweets (quantity reduction)
- CORS enabled for frontend integration

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- FastAPI
- Uvicorn

---

## 📂 Project Structure


---

## ▶️ How to Run the Project Locally

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
http://127.0.0.1:8000

AI Tools Used

ChatGPT

How I Used AI

Generated initial backend boilerplate using FastAPI

Helped structure API endpoints

Assisted in debugging runtime errors

Assisted in frontend JavaScript logic and UI structure

My Reflection

AI significantly improved my productivity by speeding up boilerplate creation and debugging.
However, I manually:

Integrated frontend and backend

Fixed runtime and dependency errors

Tested API behavior

Designed UI and user flow

AI was used as an assistant, not a replacement for implementation or understanding.

---

# ✅ Git Commit Message (AI Co-Author COMPLIANT)

Use **this exact format** when committing:

```bash
git commit -m "feat: implement sweet shop frontend and backend integration"

Used an AI assistant to generate initial boilerplate and assist with debugging.
Manually implemented business logic, UI integration, and testing.

Co-authored-by: ChatGPT <ai@users.noreply.github.com>
<img width="1360" height="768" alt="Screenshot 2025-12-15 114303" src="https://github.com/user-attachments/assets/d067cbc0-a936-43e6-9894-37d3cfcca486" />
