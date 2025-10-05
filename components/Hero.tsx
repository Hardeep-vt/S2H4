'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Sparkles className="h-4 w-4 text-primary-500" />
                <span className="text-sm font-medium text-gray-700">Smokeless Wellness Innovation</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-wellness-600 bg-clip-text text-transparent">
                  Breathe Pure,
                </span>
                <br />
                <span className="text-gray-900">Feel Alive</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience the future of wellness with S2H4 smokeless inhalers. 
                Pure natural oil flavors that refresh your senses and uplift your spirit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-primary flex items-center justify-center space-x-2 group">
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness-600">15+</div>
                <div className="text-sm text-gray-600">Natural Flavors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Natural Oils</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Product Image Placeholder */}
              <div className="bg-gradient-to-br from-primary-100 to-wellness-100 rounded-3xl p-12 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-32 h-48 mx-auto bg-gradient-to-b from-primary-200 to-wellness-200 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-8 h-16 bg-gradient-to-b from-primary-400 to-wellness-400 rounded-full mx-auto"></div>
                      <div className="text-xs font-medium text-gray-600">S2H4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-400 to-wellness-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-wellness-400 to-primary-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-primary-300 to-wellness-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
