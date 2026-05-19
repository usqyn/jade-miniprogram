const { products, categories } = require('../../utils/data.js')
const app = getApp()

Page({
  data: {
    searchText: '',
    categories: categories,
    activeCategory: 'all',
    productList: products,
    cartCount: 0
  },

  onLoad(options) {
    if (options.category) {
      this.setData({
        activeCategory: options.category
      })
      this.filterProducts(options.category)
    }
  },

  onShow() {
    this.setData({
      cartCount: app.getCartCount()
    })
  },

  onSearchInput(e) {
    this.setData({
      searchText: e.detail.value
    })
    this.filterProducts(this.data.activeCategory)
  },

  onCategoryTap(e) {
    const id = e.currentTarget.dataset.id
    this.setData({
      activeCategory: id
    })
    this.filterProducts(id)
  },

  filterProducts(categoryId) {
    let filtered = products
    if (categoryId !== 'all') {
      filtered = products.filter(p => p.category === categoryId)
    }
    if (this.data.searchText) {
      filtered = filtered.filter(p => 
        p.name.includes(this.data.searchText)
      )
    }
    this.setData({
      productList: filtered
    })
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${id}`
    })
  },

  addToCart(e) {
    e.stopPropagation()
    const id = e.currentTarget.dataset.id
    const product = products.find(p => p.id === id)
    if (product) {
      app.addToCart(product)
      this.setData({
        cartCount: app.getCartCount()
      })
    }
  },

  goToCart() {
    wx.showToast({
      title: '购物车功能',
      icon: 'none'
    })
  }
})
