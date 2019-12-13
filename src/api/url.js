let baseUrl = "";   //这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = "http://localhost:3000/"  //开发环境url
    break
  case 'test':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
    baseUrl = "http://localhost:3000/"  //测试环境中的url
    break
  case 'production':
    baseUrl = "http://106.13.94.82:3000"   //生产环境url
    break
}

export default baseUrl