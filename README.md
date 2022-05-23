<!--
 * @Description:
 * @Author: lanchao
 * @Date: 2022-01-06 16:38:49
 * @LastEditTime: 2022-05-23 13:09:22
 * @LastEditors: lanchao
 * @Reference:
-->

# electron-vue3-typescript

## 开发环境

```
node.js 版本  16.13.1
开发工具 vscode
```

## 安装包

```
yarn install
```

### 本地运行网页版

```
yarn run web:serve
```

### 打包网页版

```
yarn run web:build
可用启动服务代理静态资源的n种方法.pdf里面的方式
```

### 本地运行桌面版

```
yarn run electron:serve
```

### 打包桌面版 exe

```
yarn run electron:build
```

### 单元测试

```
yarn run test:unit
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 升级

```
yarn run electron:build 打包后

将dist_electron 目录下的 exe文件 和 latest.yml上传到 服务器指定目录下

升级地址 修改 .env.development/.env.production  VUE_APP_UPLOAD
```
