FROM node:18

WORKDIR /app

# Fix for old react-scripts + new Node
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
