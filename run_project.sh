#!/bin/sh

# DATABASE
export DATABASE_NAME=ws_rest_db
export DATABASE_USER=postgres
export DATABASE_PASSWORD=Juan
export DATABASE_HOST=127.0.0.1
export DATABASE_PORT=5432

# TOKEN
export TOKEN_DURATION=1000

# CODE RESET
export CODE_DURATION=10000000

export SECRET_KEY=123
sudo service postgresql start

cd FortmulaRESTServer/

find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc"  -delete

python manage.py makemigrations --settings=FortmulaRESTServer.settings.development

python manage.py migrate --settings=FortmulaRESTServer.settings.development

python manage.py runserver $IP:$PORT --settings=FortmulaRESTServer.settings.development