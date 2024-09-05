# compass
May the stars guide your way.

## run compass
```shell
docker_image=compass:v1.0.0
docker_name=compass
docker_mnt=/data1/compass

if [ ! -d ${docker_mnt} ]
then
    mkdir -p ${docker_mnt}
fi

docker run -d -p 8080:80 --name ${docker_name} ${docker_image}
docker cp ${docker_name}:/etc/nginx/nginx.conf ${docker_mnt}/nginx.conf
docker cp ${docker_name}:/etc/nginx/conf.d ${docker_mnt}/conf.d
docker cp ${docker_name}:/usr/share/nginx/html ${docker_mnt}/html
docker stop ${docker_name}
docker rm ${docker_name}

docker run -itd \
    -p 8080:80 \
    -p 4430:443 \
    -v ${docker_mnt}/nginx.conf:/etc/nginx/nginx.conf \
    -v ${docker_mnt}/conf.d:/etc/nginx/conf.d \
    -v ${docker_mnt}/html:/usr/share/nginx/html \
    -v ${docker_mnt}/cert:/data/cert \
    --name ${docker_name} \
    ${docker_image}

echo '
server {
    listen 443 ssl;
    server_name localhost;

    ssl_certificate /data/cert/certificate.crt;
    ssl_certificate_key /data/cert/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
' >> ${docker_mnt}/conf.d/default.conf

docker exec ${docker_name} sh -c "nginx -s reload"
```

## TODO
1. src/data.json need to set a real config file
