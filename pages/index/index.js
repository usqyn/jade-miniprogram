const { products, banners } = require('../../utils/data.js')

Page({
  data: {
    banners: banners,
    navList: [
      { icon: '💎', name: '玉石类', id: 'jade' },
      { icon: '🪵', name: '木制类', id: 'wood' },
      { icon: '💠', name: '宝石类', id: 'gem' },
      { icon: '🥜', name: '果核类', id: 'nut' }
    ],
    products: products,
    careTip: '【保养指南】日常用软布擦拭即可保持温润，收藏更持久'
  },

  onLoad() {
  },

  onShow() {
  },

  goToProductList(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/product-list/product-list?category=${id}`
    })
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${id}`
    })
  },

  playVoice() {
    wx.showToast({
      title: '语音播放',
      icon: 'none'
    })
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '13800000000'
    })
  }
})
