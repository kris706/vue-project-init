const user = {
  state: {
    userInfo: ''
  },
  mutations: {
    SET_USER: (state, userInfo) => {
      state.userInfo = userInfo
    },
    CLEAR_USER: state => {
      state.userInfo = ''
    }
  },
  actions: {
    // 登录接口调用
    // Login({ commit, state }, loginForm) {
    //   return new Promise((resolve, reject) => {
    //     login(loginForm)
    //       .then(res => {
    //         if (res.code === 0) {
    //           const userInfo = res.data
    //           console.log('userInfo', userInfo)
    //           window.sessionStorage.setItem('hasLogin', '1')
    //           window.sessionStorage.setItem('userRoleId', userInfo.rolesId)
    //           window.sessionStorage.setItem(
    //             'userInfo',
    //             JSON.stringify(res.data)
    //           )
    //           //登录成功后清除用户信息，等进入首页再重新获取用户信息
    //           commit('CLEAR_USER')
    //         }
    //         resolve(res)
    //       })
    //       .catch(err => {
    //         reject(err)
    //       })
    //   })
    // }

  }
}