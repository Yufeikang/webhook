# express template
## 配置
> 环境启动依赖配置文件，完成一下配置在 .env 文件中

```
PORT=8000
# NODE_NEV=develop
NODE_NEV=production
SHELL_DIR=/shells/
```

## 编译（docker）
```
docker build -t webhook github.com/Yufeikang/webhook.git
```

## 运行
```
docker run --name webhook -d -p 8000:8000 -v $PWD/webhook_shells:/shells/ -v $PWD/.env:/app/.env webhook
```

