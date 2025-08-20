# Dockerfile for user-activity-log NestJS service
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["npm", "run", "start:prod"]
