const productsData = [
  { id: 'BR001', name: 'برجر شيكينا 20 قطعة', category: 'البرجر والمشويات', price: 180, oldPrice: 195, unit: '20 قطعة', description: 'برجر بقري مجمد عالي الجودة', rating: 4.8, isBestSeller: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
  { id: 'BR002', name: 'برجر جاست سادة', category: 'البرجر والمشويات', price: 195, unit: '10 قطع', description: 'برجر بقري سادة', rating: 4.6, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80' },
  { id: 'BR003', name: 'برجر جاست بالجبنة', category: 'البرجر والمشويات', price: 225, unit: '7 قطع', description: 'برجر بقري محشو بالجبنة', rating: 4.7, image: 'https://images.unsplash.com/photo-1572775108083-30d9b9f6e8c5?w=500&q=80' },
  { id: 'BR004', name: 'برجر مينكو جامبو', category: 'البرجر والمشويات', price: 315, unit: '1 كجم', description: 'برجر جامبو', rating: 4.9, isNew: true, image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=500&q=80' },
  { id: 'CK001', name: 'استربس ولعتين', category: 'الفراخ', price: 275, unit: '1 كجم', description: 'استربس دجاج مقرمش', rating: 4.9, isBestSeller: true, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80' },
  { id: 'CK002', name: 'استربس سمارت', category: 'الفراخ', price: 250, unit: '1 كجم', description: 'استربس دجاج', rating: 4.5, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80' },
  { id: 'CK006', name: 'كوردن بلو سمارت', category: 'الفراخ', price: 240, unit: '1 كجم', description: 'كوردن بلو محشو بالجبنة', rating: 4.8, image: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=500&q=80' },
  { id: 'FR001', name: 'بطاطس كيرلي', category: 'البطاطس والمقبلات', price: 140, unit: '2.5 كجم', description: 'بطاطس كيرلي', rating: 4.8, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80' },
  { id: 'FR002', name: 'بطاطس بوم فريت', category: 'البطاطس والمقبلات', price: 140, unit: '2.5 كجم', description: 'بطاطس بوم فريت', rating: 4.7, image: 'https://images.unsplash.com/photo-1576108914874-4684d40f1f12?w=500&q=80' },
  { id: 'FR005', name: 'حلقات بصل', category: 'البطاطس والمقبلات', price: 130, unit: '1 كجم', description: 'أونيون رينجز', rating: 4.7, isBestSeller: true, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80' },
  { id: 'MT001', name: 'لحمة قطع', category: 'اللحوم', price: 295, unit: '1 كجم', description: 'لحمة بقري مجمدة', rating: 4.8, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=500&q=80' },
  { id: 'MT002', name: 'لحمة مفرومة', category: 'اللحوم', price: 240, unit: '1 كجم', description: 'لحمة مفرومة بقري', rating: 4.7, image: 'https://images.unsplash.com/photo-1579047929411-1a6df6775ab6?w=500&q=80' },
  { id: 'SF001', name: 'فيليه سمك أبيض', category: 'الأسماك', price: 150, unit: '1 كجم', description: 'فيليه سمك أبيض مجمد', rating: 4.7, isBestSeller: true, image: 'https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=500&q=80' },
  { id: 'SF002', name: 'جمبري كرسبي', category: 'الأسماك', price: 265, unit: '1 كجم', description: 'جمبري مقرمش', rating: 4.8, isNew: true, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&q=80' },
  { id: 'CH004', name: 'موزاريلا إكسترا 1كجم', category: 'الأجبان', price: 145, unit: '1 كجم', description: 'جبنة موزاريلا', rating: 4.9, isBestSeller: true, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80' },
  { id: 'CH008', name: 'جبنة شيدر شرائح', category: 'الأجبان', price: 95, unit: '250 جم', description: 'جبنة شيدر', rating: 4.8, image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=500&q=80' },
  { id: 'VG002', name: 'ملوخية', category: 'الخضروات', price: 25, unit: '400 جم', description: 'ملوخية مجمدة', rating: 4.8, isBestSeller: true, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80' },
  { id: 'SC001', name: 'كاتشب جامبو', category: 'الصوصات', price: 60, unit: '1 كجم', description: 'كاتشب للطهي', rating: 4.5, image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&q=80' },
  { id: 'IC001', name: 'آيس كريم ميكس رباعي', category: 'الآيس كريم', price: 185, oldPrice: 200, unit: '1 لتر', description: 'أربع نكهات', rating: 4.9, isBestSeller: true, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&q=80' },
  { id: 'DS003', name: 'ماكس تيلا', category: 'الحلويات', price: 110, unit: '350 جم', description: 'كريمه بندق', rating: 4.9, isBestSeller: true, image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&q=80' }
];

const categories = [
  { id: 'all', name: 'الكل', icon: '🛒' },
  { id: 'البرجر والمشويات', name: 'برجر ومشويات', icon: '🍔' },
  { id: 'الفراخ', name: 'الفراخ', icon: '🍗' },
  { id: 'البطاطس والمقبلات', name: 'بطاطس', icon: '🍟' },
  { id: 'اللحوم', name: 'اللحوم', icon: '🥩' },
  { id: 'الأسماك', name: 'الأسماك', icon: '🐟' },
  { id: 'الأجبان', name: 'الأجبان', icon: '🧀' },
  { id: 'الخضروات', name: 'الخضروات', icon: '🥬' },
  { id: 'الصوصات', name: 'الصوصات', icon: '🥫' },
  { id: 'الآيس كريم', name: 'الآيس كريم', icon: '🍦' },
  { id: 'الحلويات', name: 'الحلويات', icon: '🍫' }
];
