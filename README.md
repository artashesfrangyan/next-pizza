# Next Pizza

Проект интернет-магазина пиццы на Next.js с PostgreSQL.

## Разработка

### Локальная разработка

1. Запустите PostgreSQL:
```bash
docker-compose -f docker-compose.dev.yml up -d
```

2. Настройте базу данных:
```bash
npm run prisma:push
npm run prisma:seed
```

3. Запустите сервер:
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### Docker (полное приложение)

```bash
docker-compose up --build
```

## Продакшен

Для продакшена нужно будет использовать `.env.production` с реальной базой данных.

```bash
NODE_ENV=production npm run build
NODE_ENV=production npm start
```
