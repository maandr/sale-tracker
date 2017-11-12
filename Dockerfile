FROM node:6-alpine

EXPOSE 3000

COPY package.json package.json

RUN npm install

COPY . .

RUN npm build

CMD ["node", "dist/index.js"]