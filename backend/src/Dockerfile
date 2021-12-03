FROM node:latest

WORKDIR /usr/budget_app

COPY package.json ./

COPY . .

RUN yarn

EXPOSE 2265

CMD [ "yarn", "start" ]