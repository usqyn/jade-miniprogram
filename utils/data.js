const products = [
  {
    id: '1',
    name: '海南黄花梨鬼脸对牌',
    price: 148,
    images: [
      'https://images.unsplash.com/photo-1612815338314-a61e8ef07cb2?w=600&q=80',
      'https://images.unsplash.com/photo-1612815338314-a61e8ef07cb2?w=600&q=80'
    ],
    category: 'wood',
    orders: 0,
    description: '精选上等天然材质，经传统工艺匠心打造，质地温润细腻，色泽醇厚包浆，兼具收藏与把玩价值。其造型古朴雅致，线条流畅自然，细节刻画生动，无论是日常盘玩还是案头陈设，都能彰显主人的文化品位。'
  },
  {
    id: '2',
    name: '碧玺耳环',
    price: 236,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80'
    ],
    category: 'gem',
    orders: 0,
    description: '天然碧玺宝石，色泽鲜艳，晶体通透。纯银镶嵌，工艺精湛，佩戴舒适。'
  },
  {
    id: '3',
    name: '和田玉挂件',
    price: 588,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80'
    ],
    category: 'jade',
    orders: 12,
    description: '新疆和田玉，温润细腻，雕工精美，寓意吉祥，是收藏佩戴的佳品。'
  },
  {
    id: '4',
    name: '橄榄核雕手串',
    price: 168,
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80'
    ],
    category: 'nut',
    orders: 5,
    description: '精选老油核，手工雕刻，栩栩如生，包浆后更具韵味。'
  },
  {
    id: '5',
    name: '紫檀木手把件',
    price: 298,
    images: [
      'https://images.unsplash.com/photo-1618169807978-5b10a1955bb5?w=600&q=80'
    ],
    category: 'wood',
    orders: 8,
    description: '印度小叶紫檀，密度高，油性足，盘玩后形成漂亮的包浆。'
  },
  {
    id: '6',
    name: '翡翠手镯',
    price: 1288,
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80'
    ],
    category: 'jade',
    orders: 3,
    description: '缅甸A货翡翠，冰种飘花，种水俱佳，收藏级精品。'
  }
]

const categories = [
  { id: 'all', name: '全部' },
  { id: 'jade', name: '玉石类' },
  { id: 'wood', name: '木制类' },
  { id: 'gem', name: '宝石类' },
  { id: 'nut', name: '果核类' }
]

const banners = [
  'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
  'https://images.unsplash.com/photo-1551817958-20204d6ab222?w=1200&q=80'
]

const productTypes = [
  { id: 'bracelet', name: '手镯', nameEn: 'BRACELET', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80' },
  { id: 'pendant', name: '吊坠', nameEn: 'PENDANT', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
  { id: 'ring', name: '戒指', nameEn: 'RING', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 'earrings', name: '耳饰', nameEn: 'EARRINGS', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 'ornaments', name: '摆件', nameEn: 'ORNAMENTS', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' }
]

const features = [
  { icon: '🛡️', title: '天然A货', desc: '权威鉴定 质量保障' },
  { icon: '💎', title: '匠心工艺', desc: '大师雕琢 精益求精' },
  { icon: '🎁', title: '精美礼盒', desc: '品质包装 送礼佳选' },
  { icon: '🎧', title: '贴心服务', desc: '专业客服 售后无忧' }
]

module.exports = {
  products,
  categories,
  banners,
  productTypes,
  features
}
