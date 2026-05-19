Page({
  data: {
    stores: [
      {
        id: 1,
        name: 'XXX文玩海珠店',
        address: '广州市工业大道',
        distance: '100m',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
      },
      {
        id: 2,
        name: 'XXX文玩天河店',
        address: '广州市天河路',
        distance: '100m',
        image: 'https://images.unsplash.com/photo-1580436541340-89e183c35677?w=400&q=80'
      }
    ]
  },

  onLoad() {
  },

  openMap(e) {
    wx.openLocation({
      latitude: 23.1291,
      longitude: 113.2644,
      name: e.currentTarget.dataset.name,
      address: e.currentTarget.dataset.address
    })
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '13800000000'
    })
  }
})
