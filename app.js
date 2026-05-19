App({
  globalData: {
    userInfo: null,
    cart: []
  },

  onLaunch() {
    const cart = wx.getStorageSync('cart') || []
    this.globalData.cart = cart
  },

  addToCart(product) {
    const cart = this.globalData.cart
    const existItem = cart.find(item => item.productId === product.id)
    if (existItem) {
      existItem.quantity++
    } else {
      cart.push({
        productId: product.id,
        productName: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1
      })
    }
    this.globalData.cart = cart
    wx.setStorageSync('cart', cart)
    wx.showToast({
      title: '已加入购物车',
      icon: 'success'
    })
  },

  getCartCount() {
    return this.globalData.cart.reduce((sum, item) => sum + item.quantity, 0)
  }
})
