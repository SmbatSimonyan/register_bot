from telegram import Update
from telegram import TeleBot
from telegram.ext import Application, CommandHandler, ContextTypes

from db import SessionLocal, User
import telebot
from dotenv import load_dotenv
import os
load_dotenv()
bot = telebot.TeleBot("TOKEN")



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
    app = Application.builder().token(bot).build()

    app.add_handler(CommandHandler("start", start))

    print("Bot running...")
    app.run_polling()


if __name__ == "__main__":
    main()