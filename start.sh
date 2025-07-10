#!/bin/sh

# 设置默认值
API_HOST=${API_HOST:-localhost}
API_PORT=${API_PORT:-8080}

# 替换 nginx 配置文件中的环境变量
envsubst '${API_HOST},${API_PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# 启动 nginx
exec nginx -g 'daemon off;' 