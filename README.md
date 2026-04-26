🤖 Register Bot (Telegram + Web Interface)

A Telegram bot with a web interface for handling user registration and data management.
The project is containerized with Docker and uses environment variables for secure configuration.

🚀 Features
🤖 Telegram bot interaction
🧾 User registration system
🌐 Web interface (HTML + CSS + JS)
🗄️ Database integration (db.py)
🔐 Environment-based configuration (.env)
🐳 Docker & Docker Compose support
📦 Modular structure (API, bot, DB separation)
🛠️ Tech Stack
Python 3
Telegram Bot API
Web (HTML, CSS, JavaScript)
Docker & Docker Compose
python-dotenv
📁 Project Structure
register_bot/
│
├── api.py                # API / backend logic
├── bot.py                # Telegram bot logic
├── db.py                 # Database operations
│
├── templates/            # HTML templates (web UI)
├── static/
│   ├── script.js         # Frontend JS
│   └── style.css         # Styling
│
├── .env                  # Environment variables (NOT committed)
├── .gitignore
├── .dockerignore
│
├── Dockerfile            # Docker image config
├── docker-compose.yml    # Multi-container setup
│
├── requirements.txt      # Python dependencies
└── README.md
⚙️ Setup & Installation
1. Clone the repository
git clone https://github.com/SmbatSimonyan/register_bot.git
cd register_bot
2. Create .env file
BOT_TOKEN=your_telegram_bot_token

(Optional — depending on your code)

DB_URL=your_database_url
PORT=8000
3. Run locally (without Docker)
pip install -r requirements.txt
python bot.py
4. Run with Docker 🐳
docker-compose up --build
🤖 Bot Usage
Open Telegram
Find your bot
Send /start
Complete registration
🌐 Web Interface
Accessible via browser (depending on your API setup)
Uses:
templates/ → HTML
static/ → CSS & JS
🔒 .gitignore

Make sure sensitive and unnecessary files are ignored:

venv/
__pycache__/
*.pyc
.env
🧠 Architecture
bot.py → handles Telegram interactions
api.py → backend / HTTP logic
db.py → database layer
templates + static → frontend

This separation makes the project easy to scale and maintain.

📦 Future Improvements
Add authentication system
Improve UI/UX
Add admin panel
Logging & monitoring
Deploy to cloud (AWS, VPS, etc.)
👤 Author

Smbat Simonyan
GitHub: https://github.com/SmbatSimonyan
