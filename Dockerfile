FROM node:20-alpine
LABEL authors="nele"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 5173
CMD ["npm", "run", "dev"]
