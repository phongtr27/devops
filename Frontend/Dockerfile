FROM node:14-alpine3.16 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV REACT_APP_API_REST=http://35.229.252.140:80
ENV REACT_APP_API_PRODUCT=http://104.199.255.164:80
RUN npm run build

FROM nginx:stable-alpine
#alo
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]