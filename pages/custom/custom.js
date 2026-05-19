Page({
  data: {
    name: '',
    phone: '',
    selectedMaterial: null,
    selectedPurpose: null,
    materials: [
      { id: 'jade', name: '玉石类' },
      { id: 'wood', name: '木制类' },
      { id: 'gem', name: '宝石类' },
      { id: 'nut', name: '果核类' }
    ],
    purposes: [
      { id: 'personal', name: '个人佩戴' },
      { id: 'collection', name: '收藏' },
      { id: 'gift', name: '礼赠' }
    ]
  },

  onLoad() {
  },

  onNameInput(e) {
    this.setData({ name: e.detail.value })
  },

  onPhoneInput(e) {
    this.setData({ phone: e.detail.value })
  },

  selectMaterial(e) {
    const id = e.currentTarget.dataset.id
    this.setData({ selectedMaterial: id })
  },

  selectPurpose(e) {
    const id = e.currentTarget.dataset.id
    this.setData({ selectedPurpose: id })
  },

  submitForm() {
    if (!this.data.name || !this.data.phone || !this.data.selectedMaterial || !this.data.selectedPurpose) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }
    wx.showToast({
      title: '提交成功',
      icon: 'success'
    })
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '13800000000'
    })
  }
})
