# Dockerfile para backend NestJS (Desarrollo con hot reload)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install # Instala dependencias de desarrollo
COPY . .
# RUN npx prisma migrate dev --name init
# RUN npm run seed
RUN npx prisma generate
CMD ["npm", "run", "start:dev"]
