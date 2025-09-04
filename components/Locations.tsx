const Locations = () => {
  const locations = [
    {
      id: 'flatiron',
      name: '10 East 23rd Street',
      address: 'New York, NY 10010',
      phone: '917-475-1765',
      hours: {
        monday: '8am to 8pm',
        tuesday: '8am to 8pm',
        wednesday: '8am to 8pm',
        thursday: '8am to 8pm',
        friday: '8am to 8pm',
        saturday: '8am to 7pm',
        sunday: '10am to 7pm'
      },
      description: 'Located less than a block from the Flatiron Building, across from Madison Square Park.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'chelsea-169',
      name: '169 West 23rd Street',
      address: 'New York, NY 10011',
      phone: '917-639-3902',
      hours: {
        monday: '8am to 8pm',
        tuesday: '8am to 8pm',
        wednesday: '8am to 8pm',
        thursday: '8am to 8pm',
        friday: '8am to 8pm',
        saturday: '8am to 7pm',
        sunday: '10am to 7pm'
      },
      description: 'In the heart of Chelsea, next to Red Line\'s 23rd St Station, 3 blocks from the High Line.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'chelsea-170',
      name: '170 West 23rd Street',
      address: 'New York, NY 10011',
      phone: '646-634-2232',
      hours: {
        monday: '8am to 8pm',
        tuesday: '8am to 8pm',
        wednesday: '8am to 8pm',
        thursday: '8am to 8pm',
        friday: '8am to 8pm',
        saturday: '8am to 7pm',
        sunday: '10am to 7pm'
      },
      description: 'In the heart of Chelsea, next to Red Line\'s 23rd St Station, 3 blocks from the High Line.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'garment',
      name: '1400 Broadway',
      address: 'New York, NY 10018',
      phone: '212-997-4247',
      hours: {
        monday: '8am to 8pm',
        tuesday: '8am to 8pm',
        wednesday: '8am to 8pm',
        thursday: '8am to 8pm',
        friday: '8am to 8pm',
        saturday: '8am to 7pm',
        sunday: '10am to 7pm'
      },
      description: 'Located on Broadway, only two blocks from Bryant Park.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'meatpacking',
      name: '267 West 15th Street',
      address: 'New York, NY 10011',
      phone: '646-850-0041',
      hours: {
        monday: '8am to 8pm',
        tuesday: '8am to 8pm',
        wednesday: '8am to 8pm',
        thursday: '8am to 8pm',
        friday: '8am to 8pm',
        saturday: '8am to 7pm',
        sunday: '10am to 7pm'
      },
      description: 'In Chelsea, near the Meatpacking District, art galleries, trendy eateries, and local boutiques.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'greenwich',
      name: '60 East 8th Street',
      address: 'New York, NY 10033',
      phone: '212-598-1840',
      hours: {
        monday: '8:30am to 7:30pm',
        tuesday: '8:30am to 7:30pm',
        wednesday: '8:30am to 7:30pm',
        thursday: '8:30am to 7:30pm',
        friday: '8:30am to 7:30pm',
        saturday: '8:30am to 7:00pm',
        sunday: '10am to 7:00pm'
      },
      description: 'Located in the heart of this historic and artistic neighborhood.',
      image: '/api/placeholder/400/300'
    }
  ]

  const neighborhoodNames = {
    'flatiron': 'Flatiron',
    'chelsea-169': 'Chelsea',
    'chelsea-170': 'Chelsea',
    'garment': 'Garment District',
    'meatpacking': 'Meatpacking District',
    'greenwich': 'Greenwich Village'
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            6 LOCATIONS IN NEW YORK CITY
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Did you know we've got you covered with 6 convenient Made Man Barbershop locations in Manhattan? Our range of services is as wide as your style choices!
          </p>
          <div className="mt-8">
            <a href="/locations" className="btn-primary">
              Locations & Contact
            </a>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="card hover:shadow-2xl transition-shadow duration-300">
              {/* Location Image */}
              <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-primary-600 font-medium">Location Image</span>
              </div>
              
              {/* Location Info */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary-800 mb-2">{location.name}</h3>
                <p className="text-primary-600 mb-2">{location.address}</p>
                <p className="text-accent-600 font-semibold">{location.phone}</p>
              </div>

              {/* Hours */}
              <div className="mb-4">
                <h4 className="font-semibold text-primary-800 mb-2">Hours:</h4>
                <div className="space-y-1 text-sm text-primary-600">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span>{location.hours.monday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span>{location.hours.tuesday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday</span>
                    <span>{location.hours.wednesday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span>{location.hours.thursday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>{location.hours.friday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>{location.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>{location.hours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-primary-600 text-sm mb-4">{location.description}</p>

              {/* CTA */}
              <a href={`/book?location=${location.id}`} className="btn-primary w-full text-center">
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Neighborhood Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 text-center mb-12">
            Our Manhattan Barber Near You
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(neighborhoodNames).map(([id, name]) => {
              const location = locations.find(loc => loc.id === id)
              if (!location) return null
              
              return (
                <div key={id} className="text-center">
                  <h4 className="text-xl font-bold text-primary-800 mb-2">
                    {name}
                  </h4>
                  <p className="text-primary-600 mb-2">
                    ({location.name})
                  </p>
                  <p className="text-primary-600 text-sm mb-4">
                    {location.description}
                  </p>
                  <a 
                    href={`/locations/${id}`} 
                    className="text-accent-600 hover:text-accent-700 font-medium underline"
                  >
                    {name} Barbershop Near You »
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations
