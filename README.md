# 🤖 Register Bot (Telegram + Web Interface)

A **Telegram bot with a web interface** for handling user registration and data management.  
The project is containerized with Docker and uses environment variables for secure configuration.

---

## 🚀 Features

- 🤖 Telegram bot interaction
- 🧾 User registration system
- 🌐 Web interface (HTML + CSS + JS)
- 🗄️ Database integration
- 🔐 Environment-based configuration (`.env`)
- 🐳 Docker & Docker Compose support
- 📦 Clean modular structure

---

## 🛠️ Tech Stack

- Python 3
- Telegram Bot API
- HTML / CSS / JavaScript
- Docker & Docker Compose
- python-dotenv

---

## 📁 Project Structure

```
register_bot/
│
├── api.py
├── bot.py
├── db.py
│
├── templates/
├── static/
│   ├── script.js
│   └── style.css
│
├── .env
├── .gitignore
├── .dockerignore
│
├── Dockerfile
├── docker-compose.yml
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/SmbatSimonyan/register_bot.git
cd register_bot
```

---

### 2. Create `.env` file

```env
BOT_TOKEN=your_telegram_bot_token
```

(Optional)
```env
DB_URL=your_database_url
PORT=8000
```

---

### 3. Run locally

```bash
pip install -r requirements.txt
python bot.py
```

---

### 4. Run with Docker

```bash
docker-compose up --build
```

---

## 🤖 Bot Usage

1. Open Telegram  
2. Search for your bot  
3. Send `/start`  
4. Complete registration  

---

## 🌐 Web Interface

- Uses `templates/` for HTML  
- Uses `static/` for CSS & JS  
- Runs via your API backend  

---

## 🔒 .gitignore

```
venv/
__pycache__/
*.pyc
.env
```

---

## 🧠 Architecture

- `bot.py` → Telegram bot logic  
- `api.py` → backend / API  
- `db.py` → database operations  
- `templates/ + static/` → frontend  

---

## 📦 Future Improvements

- Admin panel  
- Authentication system  
- Better UI/UX  
- Logging & monitoring  
- Cloud deployment  

---

## 👤 Author

**Smbat Simonyan**  
https://github.com/SmbatSimonyan
