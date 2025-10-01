'use client'

import { Star, Heart } from 'lucide-react'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Fresh Mint',
      description: 'Cool and refreshing mint flavor for instant energy',
      price: '$29.99',
      rating: 4.9,
      reviews: 234,
      color: 'from-green-400 to-emerald-500',
      popular: true
    },
    {
      id: 2,
      name: 'Lavender Dreams',
      description: 'Calming lavender for relaxation and stress relief',
      price: '$29.99',
      rating: 4.8,
      reviews: 189,
      color: 'from-purple-400 to-violet-500'
    },
    {
      id: 3,
      name: 'Citrus Burst',
      description: 'Energizing citrus blend to uplift your mood',
      price: '$29.99',
      rating: 4.7,
      reviews: 156,
      color: 'from-orange-400 to-yellow-500'
    },
    {
      id: 4,
      name: 'Eucalyptus Relief',
      description: 'Soothing eucalyptus for clear breathing and wellness',
      price: '$29.99',
      rating: 4.9,
      reviews: 201,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 5,
      name: 'Vanilla Comfort',
      description: 'Warm vanilla for comfort and relaxation',
      price: '$29.99',
      rating: 4.6,
      reviews: 143,
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 6,
      name: 'Berry Bliss',
      description: 'Sweet berry blend for a delightful experience',
      price: '$29.99',
      rating: 4.8,
      reviews: 178,
      color: 'from-pink-400 to-rose-500'
    }
  ]

  return (
    <section id="products" className="section-padding gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our <span className="bg-gradient-to-r from-primary-600 to-wellness-600 bg-clip-text text-transparent">Natural Flavors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each H2S4 inhaler is carefully crafted with premium natural oils 
            to deliver authentic flavors and wellness benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card p-6 group relative">
              {product.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-primary-500 to-wellness-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              {/* Product Visual */}
              <div className={`w-full h-32 bg-gradient-to-br ${product.color} rounded-xl mb-6 flex items-center justify-center shadow-lg`}>
                <div className="w-16 h-24 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <div className="w-6 h-12 bg-white/30 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="text-center">
                  <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
