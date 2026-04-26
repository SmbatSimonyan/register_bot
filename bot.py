from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
from dotenv import load_dotenv
import os
from db import SessionLocal, User

load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")



async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user

    db = SessionLocal()
    try:
        existing = db.query(User).filter(User.telegram_id == user.id).first()

        if not existing:
            new_user = User(
                telegram_id=user.id,
                first_name=user.first_name or "",
                last_name=user.last_name,
                username=user.username
            )
            db.add(new_user)
            db.commit()

    except Exception as e:
        db.rollback()
        print("DB error:", e)

    finally:
        db.close()

    await update.message.reply_text(
        f"Welcome {user.first_name}!"
    )


def main():
    app = Application.builder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))

    print("Bot running...")
    app.run_polling()


if __name__ == "__main__":
    main()