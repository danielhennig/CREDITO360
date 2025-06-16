# Node LTS slim mantém a imagem enxuta
FROM node:18-slim

# Instala dependências do sistema mínimas (bcrypt, node-gyp etc.)
RUN apt-get update && \
    apt-get install -y python3 g++ make && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copia apenas os manifests primeiro para otimizar cache
COPY package*.json ./

RUN npm install

# Copia todo o projeto
COPY . .

EXPOSE ${PORT}

# Por padrão roda em modo desenvolvimento; o ENTRYPOINT muda no compose
CMD ["npm", "run", "dev"]
