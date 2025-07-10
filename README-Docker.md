# Docker 部署说明

## 环境变量配置

此应用支持通过环境变量配置后端服务地址：

- `API_HOST`: 后端服务域名（默认: localhost）
- `API_PORT`: 后端服务端口（默认: 8080）
- `API_PROTOCOL`: API 协议（默认: http）

## 部署方式

### 1. 生产环境部署

使用 nginx 提供静态文件服务：

```bash
# 构建镜像
docker build -t account-opening-analysis .

# 运行容器
docker run -p 3000:80 \
  -e API_HOST=your-backend-host \
  -e API_PORT=8080 \
  account-opening-analysis
```

### 2. 开发环境部署

使用 Vite 开发服务器：

```bash
# 构建开发镜像
docker build -f Dockerfile.dev -t account-opening-analysis-dev .

# 运行开发容器
docker run -p 3001:3000 \
  -e VITE_API_HOST=your-backend-host \
  -e VITE_API_PORT=8080 \
  -e VITE_API_PROTOCOL=http \
  -v $(pwd)/src:/app/src \
  account-opening-analysis-dev
```

### 3. 使用 Docker Compose

#### 生产环境

```bash
docker-compose up frontend
```

#### 开发环境

```bash
docker-compose --profile dev up frontend-dev
```

## 环境变量示例

### 本地开发
```env
API_HOST=localhost
API_PORT=8080
API_PROTOCOL=http
```

### 生产环境
```env
API_HOST=api.yourcompany.com
API_PORT=443
API_PROTOCOL=https
```

## 注意事项

1. **生产环境**: 使用 nginx 构建，镜像更小，性能更好
2. **开发环境**: 使用 Vite 开发服务器，支持热重载
3. **环境变量**: 生产环境使用 `API_*`，开发环境使用 `VITE_API_*`
4. **网络**: 如果前后端在同一个 Docker 网络中，可以使用服务名称作为主机名

## 部署到服务器

```bash
# 1. 上传代码到服务器
scp -r . user@server:/path/to/app

# 2. 在服务器上构建和运行
ssh user@server
cd /path/to/app
docker build -t account-opening-analysis .
docker run -d -p 80:80 \
  -e API_HOST=your-backend-host \
  -e API_PORT=8080 \
  --name account-opening-analysis \
  account-opening-analysis
``` 