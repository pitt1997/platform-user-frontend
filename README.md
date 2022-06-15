# 用户中心前端

# 快速使用

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).



# 快速部署

## Linux 服务器部署

1、git 下载代码后初始化项目

```
npm install
```

或者

```
yarn
```

2、找到 nginx 配置文件进行编辑

```java
/usr/local/nginx/conf/nginx.conf
```

修改 location 配置项配置前端项目的位置，eg. /home/services/user-center-front。

```java
        location / {
            root   /home/services/user-center-front;
            index  index.html index.htm;
        }
```

3、编辑全局映射文件，修改映射后端请求地址

```java
./src/plugins/globalRequest.ts
```

将原有 http://localhost:8080 修改为部署后端的域名如：http://www.backend-user.com 或者其他端口地址。

4、前端代码重新编译，重新覆盖 dist 目录

5、重启 nginx

```
nginx -s reload
```

## Docker 容器部署

docker build

```shell
$ sudo docker build -t platform-user-frontend:v0.0.1 .
```

docker run

```shell
$ docker run -p 80:80 -d platform-user-frontend:v0.0.1
```

docker run -v

```shell
$ docker run -p 80:80 -v /data/platform/services/platform-user-backend:/usr/share/nginx/html -d platform-user-backend:v0.0.1
```

