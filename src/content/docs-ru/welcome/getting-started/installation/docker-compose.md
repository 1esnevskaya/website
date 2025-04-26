# Установка через Docker

## 0. Предварительные условия

⚡⚡ Убедитесь, что вы установили [Docker](https://docs.docker.com/get-docker/).

## 1. Скачайте NocoBase локально

Используйте Git для загрузки:

```bash
git clone https://github.com/nocobase/nocobase.git nocobase
```

Если у вас возникают проблемы с подключением к GitHub, используйте Gitee (или просто [скачайте Zip-архив](https://gitee.com/nocobase/nocobase/repository/archive/main.zip) и распакуйте его в папку `nocobase`):

```bash
git clone https://gitee.com/nocobase/nocobase.git nocobase
```

## 2. Выбор базы данных (выберите один из вариантов)

Перейдите в папку, скачанную на первом шаге (скорректируйте путь в зависимости от вашего случая).

```bash
# MacOS, Linux...
cd /your/path/nocobase
# Windows
cd C:\your\path\nocobase
```

Конфигурации Docker для различных баз данных немного различаются. Пожалуйста, перейдите в соответствующую директорию для выбранной базы данных.

### SQLite

```bash
cd docker/app-sqlite
```

### MySQL

```bash
cd docker/app-mysql
```

### MariaDB

```bash
cd docker/app-mariadb
```

### PostgreSQL

```bash
cd docker/app-postgres
```

## 3. Настройка docker-compose.yml (необязательно)

<Alert>

Если вы не являетесь разработчиком, пропустите этот шаг. Если вы знакомы с разработкой, вы можете дополнительно изучить, как настроить `docker-compose.yml`.

</Alert>

Структура каталога (связанная с Docker):

```bash
├── nocobase
  ├── docker
    ├── app-sqlite
      ├── storage
      ├── docker-compose.yml
    ├── app-mariadb
      ├── storage
      ├── docker-compose.yml
    ├── app-mysql
      ├── storage
      ├── docker-compose.yml
    ├── app-postgres
      ├── storage
      ├── docker-compose.yml
```

Описание конфигурации `docker-compose.yml`:

Для SQLite существует только сервис `app`, а для PostgreSQL и MySQL будут соответствующие сервисы `postgres` или `mysql`. Можно использовать базу данных из примера или настроить свою.

```yml
services:
  app:
  postgres:
  mysql:
  mariadb:
```

Порт для `app`: в примере используется порт 13000, адрес для доступа — `http://your-ip:13000/`.

```yml
services:
  app:
    ports:
      - '13000:80'
```

Версии NocoBase ([нажмите здесь, чтобы посмотреть последние версии](https://hub.docker.com/r/nocobase/nocobase/tags)). Описание важных версий:

- `nocobase/nocobase:main` — версия из ветки main, нестабильная версия, подходит для пользователей, желающих опробовать новейшие изменения.
- `nocobase/nocobase:latest` — последняя выпущенная стабильная версия; если важна стабильность, рекомендуется использовать эту версию.
- `nocobase/nocobase:0.18.0-alpha.9` — использование конкретной версии.

:::warning
`nocobase/nocobase:main` в данный момент не поддерживает архитектуру arm64.
:::

```yml
services:
  app:
    image: nocobase/nocobase:latest
```

环境变量

```yml
services:
  app:
    image: nocobase/nocobase:latest
    environment:
      - APP_KEY=your-secret-key
      - DB_DIALECT=postgres
      - DB_HOST=postgres
      - DB_DATABASE=nocobase
      - DB_USER=nocobase
      - DB_PASSWORD=nocobase
```

:::warning
- `APP_KEY` — это секретный ключ приложения, который используется для генерации пользовательских токенов и других целей (если изменить `APP_KEY`, старые токены станут недействительными). Это может быть любая случайная строка. Измените её на собственную и убедитесь, что она не раскрывается.
- `DB_*` относится к базе данных. Если вы не используете базу данных из примера по умолчанию, измените эти параметры в соответствии с вашей конфигурацией.
- При использовании MySQL (или MariaDB) необходимо настроить переменную окружения `DB_TIMEZONE`, например, `DB_TIMEZONE=+08:00`.
:::

## 4. Установка и запуск NocoBase

Процесс установки может занять несколько минут.

```bash
# 拉取最新镜像
$ docker-compose pull
# 在后台运行
$ docker-compose up -d
# 查看 app 进程的情况
$ docker-compose logs app

app-sqlite-app-1  | nginx started
app-sqlite-app-1  | yarn run v1.22.15
app-sqlite-app-1  | $ cross-env DOTENV_CONFIG_PATH=.env node -r dotenv/config packages/app/server/lib/index.js install -s
app-sqlite-app-1  | Done in 2.72s.
app-sqlite-app-1  | yarn run v1.22.15
app-sqlite-app-1  | $ pm2-runtime start --node-args="-r dotenv/config" packages/app/server/lib/index.js -- start
app-sqlite-app-1  | 2022-04-28T15:45:38: PM2 log: Launching in no daemon mode
app-sqlite-app-1  | 2022-04-28T15:45:38: PM2 log: App [index:0] starting in -fork mode-
app-sqlite-app-1  | 2022-04-28T15:45:38: PM2 log: App [index:0] online
app-sqlite-app-1  | 🚀 NocoBase server running at: http://localhost:13000/
```

## 5. Вход в NocoBase

Откройте в браузере http://localhost:13000/. Инициализирующие учетные данные для входа: логин — `admin@nocobase.com`, пароль — `admin123`.
