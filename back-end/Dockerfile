FROM node:16-alpine

WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start"]
