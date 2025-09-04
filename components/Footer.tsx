const Footer = () => {
  const footerLinks = {
    services: ['Services'],
    locations: [
      'Chelsea 170 W23rd Street',
      'Chelsea 169 W23rd Street', 
      'Chelsea 267 W15th Street',
      'Flatiron',
      'Garment District',
      'Greenwich Village'
    ],
    company: ['Contact', 'Shop', 'About', 'Barbers Journal', 'Your privacy choices']
  }

  const socialLinks = [
    { name: 'X.com', href: 'https://x.com' },
    { name: 'Instagram', href: 'https://instagram.com/mademan.barber' },
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Yelp', href: 'https://yelp.com' }
  ]

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Made Man Barbershop</h3>
            <p className="text-primary-300 mb-6 max-w-md">
              Experience affordable and unmatched craftsmanship at Manhattan's finest barbershop. Multiple locations across NYC with expert barbers and premium services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a href="/services" className="text-primary-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <ul className="space-y-2">
              {footerLinks.locations.map((location) => (
                <li key={location}>
                  <a href="/locations" className="text-primary-300 hover:text-white transition-colors">
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Links */}
        <div className="border-t border-primary-700 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.company.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-primary-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 mb-4 md:mb-0">
              © 2025 Made Man Barbershop
            </p>
            <div className="flex space-x-6">
              <a href="/terms" className="text-primary-300 hover:text-white transition-colors">
                Terms and Conditions
              </a>
              <a href="/privacy" className="text-primary-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/refund" className="text-primary-300 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
