## 背景
依qiankun 官方文档实践产物，实现同源部署。

## 说明

* qiankunDemoMain 为主应用
* vue2-vue-router2-webpack2-master 为微应用
* qiankunDemoMain/dist copy 为整合打版后产物，可nginx配置后看效果

主应用 node >= 16 +
微应用 12 + <= node <= 13 ( 同官方示例版本 )

1. 运行
```
npm run dev
```

2. 打版
```
npm run build
```

实现:
* [x] 基本功能
* [x] 同源部署
* [ ] 微应用跳主应用
* [ ] 微应用跳微应用


