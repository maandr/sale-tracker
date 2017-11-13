FROM node:6-alpine

EXPOSE 3000

COPY package.json package.json

RUN npm install -g typescript

RUN npm install

COPY . .

RUN tsc

CMD ["node", "dist/index.js"]