# Установка `create-nocobase-app`

## 0. Предварительные условия

Убедитесь, что у вас установлены:

- Node.js версии 18+ и Yarn 1.22.x
- Настроена и запущена одна из следующих баз данных: SQLite 3.x, MySQL 8.0.17+, MariaDB 10.9+, PostgreSQL 10+

Если у вас не установлен Node.js, вы можете скачать и установить последнюю LTS-версию с официального сайта. Если вы планируете активно работать с Node.js, рекомендуется использовать nvm (для Windows можно использовать nvm-windows) для управления версиями Node.js.

```bash
$ node -v

v18.19.0
```

Рекомендуется использовать менеджер пакетов Yarn.

```bash
$ npm install --global yarn
$ yarn -v

1.22.21
```

Из-за особенностей сетевой среды в Китае настоятельно рекомендуется использовать зеркала внутри страны.

```bash
$ yarn config set registry https://registry.npmmirror.com/
$ yarn config set sqlite3_binary_host_mirror https://npmmirror.com/mirrors/sqlite3/
```

## 1. Создание проекта NocoBase

```bash
# SQLite
yarn create nocobase-app my-nocobase-app -d sqlite

# MySQL
yarn create nocobase-app my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e DB_TIMEZONE=+08:00

# MariaDB
yarn create nocobase-app my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e DB_TIMEZONE=+08:00

# PostgreSQL
yarn create nocobase-app my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase
```

:::warning
- `APP_KEY` — это секретный ключ приложения, который используется для генерации пользовательских токенов и других целей (если изменить `APP_KEY`, старые токены станут недействительными). Это может быть любая случайная строка. Измените её на собственную и убедитесь, что она не раскрывается.
- `DB_*` относится к базе данных. Если вы не используете базу данных из примера по умолчанию, измените эти параметры в соответствии с вашей конфигурацией.
- При использовании MySQL (или MariaDB) необходимо настроить переменную окружения `DB_TIMEZONE`, например, `DB_TIMEZONE=+08:00`.
:::

## 2. Переход в директорию проекта

```bash
cd my-nocobase-app
```

## 3. Установка зависимостей

📢 В зависимости от сетевой среды, системных настроек и других факторов этот шаг может занять несколько минут.

```bash
yarn install
# При развертывании в рабочей среде для уменьшения объема можно установить только необходимые зависимости
yarn install --production
```

## 4. Установка NocoBase

```bash
yarn nocobase install --lang=zh-CN
```

## 5. Запуск NocoBase

Для среды разработки:

```bash
yarn dev
```

Для рабочей среды:

```bash
yarn start
```

Примечание: В рабочей среде, если код был изменен, необходимо выполнить `yarn build`, а затем перезапустить NocoBase.

## 6. Вход в NocoBase

Откройте в браузере http://localhost:13000/. Начальные учетные данные для входа: логин — `admin@nocobase.com`, пароль — `admin123`.
