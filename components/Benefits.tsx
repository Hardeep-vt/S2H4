'use client'

import { Brain, Shield, Clock, Users, Leaf, Heart } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Brain,
      title: 'Enhanced Focus',
      description: 'Natural aromatherapy helps improve concentration and mental clarity throughout your day.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Stress Relief',
      description: 'Calming essential oils promote relaxation and help manage daily stress and anxiety.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Shield,
      title: 'Safe & Pure',
      description: 'No harmful chemicals, nicotine, or addictive substances. Just pure, natural wellness.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Instant Effect',
      description: 'Experience immediate benefits with our fast-acting delivery system.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Users,
      title: 'Social Friendly',
      description: 'Enjoy your wellness routine anywhere without affecting others around you.',
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious',
      description: 'Sustainable design with recyclable materials and minimal environmental impact.',
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Yoga Instructor',
      content: 'H2S4 has transformed my wellness routine. The lavender flavor helps me stay centered during busy days.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Software Engineer',
      content: 'Perfect for focus during long coding sessions. The mint flavor gives me that extra mental clarity I need.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Student',
      content: 'As a student, stress relief is crucial. H2S4 helps me stay calm during exams and study sessions.',
      rating: 5
    }
  ]

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Wellness <span className="bg-gradient-to-r from-primary-600 to-wellness-600 bg-clip-text text-transparent">Journey</span> Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the transformative benefits of natural aromatherapy with H2S4 smokeless inhalers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="card p-6 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-primary-50 to-wellness-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our <span className="text-primary-600">Community</span> Says
            </h3>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied users who have transformed their wellness routine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-wellness-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Wellness?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who have discovered the power of natural aromatherapy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
