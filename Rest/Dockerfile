FROM node:14-alpine3.16
RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5000

ENTRYPOINT ["npm", "start"]