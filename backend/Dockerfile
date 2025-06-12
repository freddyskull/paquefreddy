# Dockerfile para backend NestJS (Desarrollo con hot reload)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

# RUN npm run seed
RUN npm install -g @nestjs/cli
RUN npx prisma generate
RUN npx prisma migrate dev --name init
CMD ["npm", "run", "start:dev"]
