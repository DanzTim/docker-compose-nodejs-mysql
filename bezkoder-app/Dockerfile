FROM node:14

WORKDIR /devcode
COPY package.json .
RUN npm install
COPY . .
CMD [ "node", "server.js" ]
