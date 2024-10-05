FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3000

CMD ["npm", "start"]

EXPOSE 3000
