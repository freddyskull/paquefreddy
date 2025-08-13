# Dockerfile para backend NestJS (Desarrollo con hot reload)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

# RUN npm run seed
RUN npm install -g @nestjs/cli
# RUN npx prisma migrate deploy
CMD ["npm", "run", "start:dev"]
