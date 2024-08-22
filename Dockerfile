FROM node:12.16.3-stretch-slim AS builder

WORKDIR /opt/compass/

COPY . .

RUN npm install --save && \
    npm run build

# ==================================================

FROM nginx:stable-alpine3.20

WORKDIR /opt/compass

COPY --from=builder /opt/compass/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

VOLUME /data/cert
VOLUME /etc/nginx
VOLUME /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]