FROM node:14

WORKDIR /devcode_app
COPY package.json .
RUN npm install
COPY . .
CMD [ "node", "server.js" ]
