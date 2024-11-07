# Étape 1 : Construire les fichiers statiques avec Node.js
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Utiliser Apache pour servir les fichiers statiques
FROM httpd:alpine
COPY --from=builder /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
