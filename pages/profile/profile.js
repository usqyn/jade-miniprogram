Page({
  data: {
    userInfo: null,
    hasLogin: false,
    orderTabs: [
      { id: 'all', name: '全部', icon: '📋' },
      { id: 'pending', name: '待支付', icon: '💳' },
      { id: 'processing', name: '进行中', icon: '⏳' },
      { id: 'completed', name: '已完成', icon: '✅' },
      { id: 'cancelled', name: '已取消', icon: '❌' }
    ],
    featureList: [
      { icon: '💬', name: '最新消息', badge: 1 },
      { icon: '📋', name: '我的订阅' },
      { icon: '📝', name: '我的表单' }
    ]
  },

  onLoad() {
  },

  onShow() {
  },

  login() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasLogin: true
        })
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
      },
      fail: () => {
        wx.showToast({
          title: '需要授权登录',
          icon: 'none'
        })
      }
    })
  },

  logout() {
    this.setData({
      userInfo: null,
      hasLogin: false
    })
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '13800000000'
    })
  }
})
