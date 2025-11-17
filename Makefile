.PHONY: help dev build start docker-dev docker-prod db-push db-seed db-studio db-reset clean

help:
	@echo "Доступные команды:"
	@echo "  make dev          - Запустить разработку (БД + Next.js)"
	@echo "  make build        - Собрать приложение"
	@echo "  make start        - Запустить production сервер"
	@echo "  make docker-dev   - Запустить только БД в Docker"
	@echo "  make docker-prod  - Запустить всё приложение в Docker"
	@echo "  make db-push      - Применить схему БД"
	@echo "  make db-seed      - Заполнить БД тестовыми данными"
	@echo "  make db-studio    - Открыть Prisma Studio"
	@echo "  make db-reset     - Пересоздать БД с нуля"
	@echo "  make clean        - Остановить все Docker контейнеры"

dev:
	docker-compose -f docker-compose.dev.yml up -d
	npm run dev

build:
	npm run build

start:
	npm start

docker-dev:
	docker-compose -f docker-compose.dev.yml up -d

docker-prod:
	docker-compose up --build

db-push:
	npx prisma generate
	npx prisma db push

db-seed:
	npx prisma generate
	npm run prisma:seed

db-studio:
	npm run prisma:studio

db-reset:
	npx prisma generate
	npx prisma db push --force-reset
	npm run prisma:seed

clean:
	docker-compose -f docker-compose.dev.yml down
	docker-compose down
