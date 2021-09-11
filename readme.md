# Рабочее окружение

1. Запуск mongodb в контейнере: `docker run --name welcomebook-db -d -p 27017:27017 mongo`
2. Установка зависимостей: `npm i`
3. Запуск проекта: `npm run start`
4. Вывод логов: `npm run log`

Завершить работу приложения: `pm2 stop app`