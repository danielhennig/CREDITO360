FROM node:18-slim

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

# A porta real será definida pelo compose via comando
EXPOSE 3000
CMD ["npm", "run", "dev"]
