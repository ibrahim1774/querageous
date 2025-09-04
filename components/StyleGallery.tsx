'use client'

import { useState } from 'react'

const StyleGallery = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const galleryItems = [
    {
      id: 1,
      image: '/api/placeholder/400/500',
      alt: 'Beard Trim - stubble long',
      service: 'Beard Trim – stubble long',
      price: 'from $22',
      category: 'beard'
    },
    {
      id: 2,
      image: '/api/placeholder/400/500',
      alt: 'Haircut',
      service: 'Haircut',
      price: 'from $40',
      category: 'haircut'
    },
    {
      id: 3,
      image: '/api/placeholder/400/500',
      alt: 'Haircut',
      service: 'Haircut',
      price: 'from $40',
      category: 'haircut'
    },
    {
      id: 4,
      image: '/api/placeholder/400/500',
      alt: 'Shave',
      service: 'Shave',
      price: 'from $40',
      category: 'shave'
    },
    {
      id: 5,
      image: '/api/placeholder/400/500',
      alt: 'Barber cutting hair',
      service: 'Haircut',
      price: 'from $40',
      category: 'haircut'
    },
    {
      id: 6,
      image: '/api/placeholder/400/500',
      alt: 'Barber cutting hair',
      service: 'Haircut',
      price: 'from $40',
      category: 'haircut'
    }
  ]

  const locations = [
    'Chelsea (170 W 23rd St)',
    'Chelsea (169 W 23rd St)',
    'Meatpacking District (267 W 15th Street)',
    'Flatiron (10 E 23rd St)',
    'Garment District (1400 Broadway)',
    'Greenwich Village (60 E 8th St)'
  ]

  const services = ['Haircut', 'Beard Trim', 'Shave', 'All Services']

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Browse Our Style Gallery
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Take a look at the range of styles we've crafted at Made Man Barber Shop. Each image showcases our expertise in cuts and beard trims. Click on any style that catches your eye to learn its name and book an appointment.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-primary-700 font-medium">Services:</span>
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service === 'All Services' ? null : service)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedService === service || (service === 'All Services' && !selectedService)
                    ? 'bg-accent-500 text-white'
                    : 'bg-white text-primary-700 hover:bg-accent-50'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
                {/* Placeholder for image */}
                <div className="w-full h-80 bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                  <span className="text-primary-600 text-lg font-medium">Style Image</span>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <h3 className="text-xl font-semibold mb-2">{item.service}</h3>
                    <p className="text-lg mb-4">{item.price}</p>
                    <button className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Select location to book
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Service info below image */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-primary-800 mb-1">{item.service}</h3>
                <p className="text-accent-600 font-medium">{item.price}</p>
                <button className="text-primary-600 hover:text-accent-500 text-sm mt-2 underline">
                  Select location to book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More than just a barbershop section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6">
            MORE THAN JUST A MEN'S BARBERSHOP NEAR YOU
          </h3>
          <p className="text-lg text-primary-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Visiting Made Man Barbershop is more than just getting a haircut—it's about receiving one of the best men's grooming experiences in your local area. Our expert barbers and stylists specialize in modern and classic haircut techniques, ensuring every style is tailored precisely to your preferences.
          </p>
          <p className="text-lg text-primary-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Each men's haircut comes with a relaxing hot towel treatment and a straight razor neck shave for that clean, polished finish. Whether you want a quick trim, a stylish fade, or a complete transformation, our professional team is dedicated to providing a personalized men's salon experience that suits your style and needs.
          </p>
          <p className="text-lg text-primary-600 max-w-4xl mx-auto leading-relaxed">
            With convenient locations on <strong>East 8th Street, Broadway Street, and 23rd Street in NYC</strong>, Made Man Barbershop offers flexible appointment options, including walk-ins. We prioritize cleanliness, professionalism, and friendly service to make every visit comfortable and efficient.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StyleGallery
