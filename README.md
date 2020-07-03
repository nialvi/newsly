# weekly

## commands for local development

install dependences

```bash
npm i
```

run postgress server

```bash
docker-compose up -D
```

create migration

```bash
npx prisma migrate save --experimental
```

run migration

```bash
npx prisma migrate up   --experimental
```

run prisma studio

```bash
npx prisma studio --experimental
```

create data in db with prisma-client

```bash
npx ts-node prisma/seeds.ts
```
