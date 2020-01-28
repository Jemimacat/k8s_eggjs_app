// config/config.${env}.js
exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '192.168.5.20',
    // 端口号
    port: '32306',
    // 用户名
    user: 'root',
    // 密码
    password: '123',
    // 数据库名
    database: 'adminTask',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
