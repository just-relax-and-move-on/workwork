# 构建阶段
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装所有依赖（包括开发依赖）
RUN npm ci --legacy-peer-deps

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 生产阶段
FROM nginx:alpine

# 安装 gettext 包 (提供 envsubst 命令)
RUN apk add --no-cache gettext

# 复制构建好的文件到 nginx 目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 nginx 配置模板
COPY nginx.conf.template /etc/nginx/nginx.conf.template

# 复制启动脚本
COPY start.sh /start.sh
RUN chmod +x /start.sh

# 暴露端口
EXPOSE 80

# 设置默认环境变量
ENV API_HOST=localhost
ENV API_PORT=8080

# 使用启动脚本
CMD ["/start.sh"] 