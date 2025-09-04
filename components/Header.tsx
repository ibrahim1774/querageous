'use client'

import { useState } from 'react'
import { Menu, X, User, Calendar } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const locations = [
    { name: 'Chelsea (170 W 23rd St)', href: '/locations/chelsea-170' },
    { name: 'Chelsea (169 W 23rd St)', href: '/locations/chelsea-169' },
    { name: 'Meatpacking District (267 W 15th Street)', href: '/locations/meatpacking' },
    { name: 'Flatiron (10 E 23rd St)', href: '/locations/flatiron' },
    { name: 'Garment District (1400 Broadway)', href: '/locations/garment' },
    { name: 'Greenwich Village (60 E 8th St)', href: '/locations/greenwich' },
  ]

  const aboutItems = [
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Careers', href: '/careers' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-800">
              Made Man Barbershop
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-primary-700 hover:text-accent-500 transition-colors">
              Home
            </a>
            
            <a href="/services" className="text-primary-700 hover:text-accent-500 transition-colors">
              Services
            </a>
            
            <div className="relative group">
              <button
                className="text-primary-700 hover:text-accent-500 transition-colors flex items-center"
                onMouseEnter={() => setIsLocationsOpen(true)}
                onMouseLeave={() => setIsLocationsOpen(false)}
              >
                Locations
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg py-2 z-50">
                  {locations.map((location) => (
                    <a
                      key={location.name}
                      href={location.href}
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-50 hover:text-accent-500"
                    >
                      {location.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="/contact" className="text-primary-700 hover:text-accent-500 transition-colors">
              Contact
            </a>
            
            <a href="/shop" className="text-primary-700 hover:text-accent-500 transition-colors">
              Shop
            </a>
            
            <div className="relative group">
              <button
                className="text-primary-700 hover:text-accent-500 transition-colors flex items-center"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                About
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  {aboutItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-gray-50 hover:text-accent-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="/barbers-journal" className="text-primary-700 hover:text-accent-500 transition-colors">
              Barbers Journal
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/login" className="text-primary-700 hover:text-accent-500 transition-colors flex items-center">
              <User className="w-4 h-4 mr-2" />
              Login
            </a>
            <a href="/account" className="text-primary-700 hover:text-accent-500 transition-colors">
              My Account
            </a>
            <a href="/book" className="btn-primary">
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-primary-700 hover:text-accent-500 transition-colors">
                Home
              </a>
              <a href="/services" className="text-primary-700 hover:text-accent-500 transition-colors">
                Services
              </a>
              <a href="/locations" className="text-primary-700 hover:text-accent-500 transition-colors">
                Locations
              </a>
              <a href="/contact" className="text-primary-700 hover:text-accent-500 transition-colors">
                Contact
              </a>
              <a href="/shop" className="text-primary-700 hover:text-accent-500 transition-colors">
                Shop
              </a>
              <a href="/about" className="text-primary-700 hover:text-accent-500 transition-colors">
                About
              </a>
              <a href="/barbers-journal" className="text-primary-700 hover:text-accent-500 transition-colors">
                Barbers Journal
              </a>
              
              <div className="pt-4 border-t border-gray-200">
                <a href="/login" className="text-primary-700 hover:text-accent-500 transition-colors block mb-2">
                  Login
                </a>
                <a href="/account" className="text-primary-700 hover:text-accent-500 transition-colors block mb-2">
                  My Account
                </a>
                <a href="/book" className="btn-primary inline-block">
                  Book Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
