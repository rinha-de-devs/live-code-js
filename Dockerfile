FROM node:lts-slim

WORKDIR /live-code

COPY . .

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]