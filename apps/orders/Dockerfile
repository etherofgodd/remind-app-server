FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

FROM node:alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

RUN yarn install --production

COPY . . 

COPY --from=development /usr/src/app/dist .dist

CMD ["node", "dist/apps/orders/main"]