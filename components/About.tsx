'use client'

import { Leaf, Droplets, Heart, Zap } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Pure essential oils and natural extracts for authentic wellness experiences'
    },
    {
      icon: Droplets,
      title: 'Smokeless Design',
      description: 'Advanced technology delivers pure flavors without any smoke or harmful substances'
    },
    {
      icon: Heart,
      title: 'Wellness Focused',
      description: 'Designed to promote relaxation, focus, and overall well-being'
    },
    {
      icon: Zap,
      title: 'Instant Relief',
      description: 'Quick and effective delivery system for immediate sensory satisfaction'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary-600 to-wellness-600 bg-clip-text text-transparent">H2S4</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing wellness with innovative smokeless inhaler technology 
            that brings you closer to nature while supporting your health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-wellness-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              The Science of <span className="text-primary-600">Pure Breathing</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our proprietary technology uses advanced atomization to deliver pure, natural oil 
              particles directly to your respiratory system. This creates an immediate, 
              refreshing experience without any harmful byproducts.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">No nicotine or addictive substances</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-wellness-500 rounded-full"></div>
                <span className="text-gray-700">Laboratory-tested for purity and safety</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Environmentally friendly and sustainable</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-wellness-50 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Pure Natural Oils</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-wellness-600 mb-2">0</div>
                  <div className="text-sm text-gray-600">Harmful Chemicals</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Natural Flavors</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-wellness-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Wellness Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
