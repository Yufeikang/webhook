# 明道通途车联网平台-服务端
## 配置
> 环境启动依赖配置文件，完成一下配置在 .env 文件中

```
PORT=8000
DB_PATH=/tmp/mogodb
SERVER_URL=http://localhost:8000/api
APP_ID="2da231Hs213"
MASTER_KEY="Nrvbdsa76dsarKju"
# NODE_NEV=develop
NODE_NEV=production
```

## 运行（docker）
```
docker-compose up
```

## 重新编译并运行
```
docker-compose up --build
```

## 运行在开发模式
```
docker-compose -f docker-compose-dev.yml up 
```
