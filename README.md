<!--
 * Author  rhys.zhao
 * Date  2022-06-22 18:16:12
 * LastEditors  rhys.zhao
 * LastEditTime  2022-06-23 10:04:28
 * Description create-react-component-template 使用文档
-->

## 描述

create-react-component-template 用来创建基于 react 的 npm 组件模板。

## 安装

```
npm install create-react-component-template -g
```

## 使用

1. 创建项目
   在需要创建组件项目的目录，输入一下 shell 命令：

```
create-react-component-template [your-component]
```

其中，your-component 是你即将创建的组件模板名称。

2. 项目目录
   创建后的模板项目目录如下：
   ├─ config
   │ ├─ webpack.base.js
   │ ├─ webpack.dev.config.js
   │ └─ webpack.prod.config.js
   ├─ example
   │ └─ src
   │ ├─ app.js
   │ └─ index.html
   ├─ lib
   │ └─ index.js
   ├─ src
   │ ├─ index.js
   │ └─ index.scss
   ├─ README.md
   └─ package.json
   其中，src 是组件代码目录，lib 为打包生成代码目录。
   记得按自己需要修改 package.json 里的`keywords`,`author`,`description`, `name`等字段。
3. 开发并发布
   `npm start`: 启动开发环境。测试自己的组件功能。
   `npm run build`: 打包，将代码打包压缩到`/lib`目录。
   `npm run pub`: 打包发布自己的组件到 npm 平台。
   项目默认有个`drag-zoom-container`的拖拽缩放组件。
   发布之前，记得修改 README.md。
