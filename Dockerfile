FROM node:6-alpine

ENV PORT 3000

EXPOSE 3000

COPY package.json package.json

RUN npm install

COPY . .

RUN npm build

CMD ["node", "dist/"]