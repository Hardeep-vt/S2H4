'use client'


export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' }
    ],
    products: [
      { name: 'All Products', href: '#products' },
      { name: 'Benefits', href: '#benefits' }
    ]
  }

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/images/logo/s2h4-logo.png" 
                  alt="S2H4 Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold">S2H4</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Revolutionizing wellness with natural, smokeless inhalers. 
                Experience pure aromatherapy for a healthier, more balanced life.
              </p>
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

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 S2H4. All rights reserved. Made with ❤️ for your wellness.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
