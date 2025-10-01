'use client'

import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#story' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    products: [
      { name: 'All Products', href: '#products' },
      { name: 'New Arrivals', href: '#new' },
      { name: 'Best Sellers', href: '#bestsellers' },
      { name: 'Bundle Deals', href: '#bundles' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Shipping Info', href: '#shipping' },
      { name: 'Returns', href: '#returns' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Disclaimer', href: '#disclaimer' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-primary-500 to-wellness-500 p-2 rounded-xl">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">H2S4</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Revolutionizing wellness with natural, smokeless inhalers. 
                Experience pure aromatherapy for a healthier, more balanced life.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-400">hello@h2s4.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-400">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get wellness tips and exclusive offers delivered to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-full focus:outline-none focus:border-primary-500 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-primary-500 to-wellness-500 hover:from-primary-600 hover:to-wellness-600 px-6 py-3 rounded-r-full font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              {footerLinks.legal.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 H2S4. All rights reserved. Made with ❤️ for your wellness.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
