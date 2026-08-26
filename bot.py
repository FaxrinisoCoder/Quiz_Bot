import os

from dotenv import load_dotenv

from telegram import (
    Update,
    InlineKeyboardButton,
    InlineKeyboardMarkup
)

from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes
)


load_dotenv()

TOKEN = os.getenv("BOT_TOKEN")

WEB_APP_URL = os.getenv("WEB_APP_URL")


async def start(
    update: Update,
    context: ContextTypes.DEFAULT_TYPE
):

    keyboard = [
        [
            InlineKeyboardButton(
                "🚀 Quizni boshlash",
                web_app={
                    "url": WEB_APP_URL
                }
            )
        ]
    ]

    reply_markup = InlineKeyboardMarkup(
        keyboard
    )

    await update.message.reply_text(
        "🎓 Quiz Botga xush kelibsiz!\n\n"
        "Bu bot orqali quiz ishlashingiz mumkin.\n\n"
        "👇 Quyidagi tugmani bosing:",
        reply_markup=reply_markup
    )


def main():

    app = (
        Application
        .builder()
        .token(TOKEN)
        .build()
    )

    app.add_handler(
        CommandHandler(
            "start",
            start
        )
    )

    print("Bot ishga tushdi...")

    app.run_polling()


if __name__ == "__main__":
    main()