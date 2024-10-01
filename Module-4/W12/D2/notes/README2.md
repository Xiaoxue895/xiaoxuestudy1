设置应用的后端涉及几个关键步骤，适合初学者参考的流程如下：

### 1. 初始化项目文件夹
- 首先，在命令行中创建并进入你的项目文件夹。
- 使用 `npm init -y` 来快速生成 `package.json` 文件，这个文件会管理你的项目依赖和配置信息。

### 2. 安装依赖
使用 `npm install` 来安装一些重要的依赖项。以下是你需要的包：
- **Express**：服务器框架，用于处理 HTTP 请求。
- **cookie-parser**：解析请求中的 cookies。
- **cors**：跨域资源共享（CORS），允许来自不同域的请求。
- **csurf**：防止跨站请求伪造（CSRF）攻击。
- **dotenv**：从 `.env` 文件加载环境变量。
- **express-async-errors**：处理异步路由中的错误。
- **helmet**：安全中间件，保护你的应用免受常见的网络攻击。
- **jsonwebtoken**：用于生成和验证 JSON Web Tokens（JWT）。
- **morgan**：日志工具，记录服务器请求和响应的信息。
- **per-env**：根据环境变量启动应用程序。
- **sequelize**：ORM（对象关系映射）工具，用于与数据库交互。
- **pg**：PostgreSQL 数据库的客户端。

命令如下：
```bash
npm install cookie-parser cors csurf dotenv express express-async-errors helmet jsonwebtoken morgan per-env sequelize pg
```

### 3. 安装开发依赖
为了在开发时更加顺畅，还需要安装一些开发依赖：
- **sqlite3**：开发环境下使用的数据库。
- **dotenv-cli**：在命令行使用 dotenv 文件中的变量。
- **nodemon**：实时监听文件变化并自动重启服务器。

命令如下：
```bash
npm install -D sqlite3 dotenv-cli nodemon
```

### 4. 设置 Sequelize
- 使用 Sequelize CLI 生成迁移文件和模型：
  ```bash
  npx sequelize-cli init
  ```
  这会生成 `config`、`models`、`migrations` 和 `seeders` 目录。

- 修改 `config/config.json`，配置数据库信息，确保开发、测试和生产环境下的数据库配置正确。

### 5. 初始化 Express 应用
- 在项目根目录下创建 `app.js` 文件，配置 Express 服务器和中间件。例如：
  ```javascript
  const express = require('express');
  const cookieParser = require('cookie-parser');
  const csurf = require('csurf');
  const helmet = require('helmet');
  const cors = require('cors');
  
  const app = express();
  
  app.use(helmet());
  app.use(cookieParser());
  app.use(cors());
  app.use(csurf({ cookie: true }));
  
  app.get('/', (req, res) => res.send('Server is running'));
  
  module.exports = app;
  ```

### 6. 连接安全中间件
- **helmet**：保护你的应用免受常见的安全风险。
- **cookie-parser** 和 **csurf**：用来防止 CSRF 攻击，保护应用的安全性。

确保这些中间件正确配置，尤其是 **csurf**，它需要用到 cookies 以确保请求安全。

### 7. 测试服务器
- 使用 `nodemon` 监听文件变化并自动重启服务器，确保每次修改都能立即生效。
  ```bash
  npx nodemon app.js
  ```

在浏览器中打开 `http://localhost:3000`，你应该会看到服务器正常运行的信息。

### 注意事项：
1. **环境变量配置**：使用 `.env` 文件存储敏感信息，如数据库连接字符串、JWT 秘钥等。
2. **Sequelize 配置**：确保根据开发和生产环境正确配置 Sequelize 的数据库信息。
3. **错误处理**：使用 `express-async-errors` 可以自动捕获异步请求中的错误，简化错误处理。

通过这些步骤，你可以顺利地启动并配置 Express 后端应用。