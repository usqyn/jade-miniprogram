const { products } = require('../../utils/data.js')

Page({
  data: {
    product: null
  },

  onLoad(options) {
    const id = options.id
    const product = products.find(p => p.id === id)
    if (product) {
      this.setData({
        product: product
      })
      wx.setNavigationBarTitle({
        title: product.name
      })
    }
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '13800000000'
    })
  },

  makeReservation() {
    wx.showToast({
      title: '预订成功',
      icon: 'success'
    })
  },

  shareProduct() {
    wx.showToast({
      title: '分享功能',
      icon: 'none'
    })
  }
})
