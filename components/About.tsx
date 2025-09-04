const About = () => {
  const stats = [
    { number: '10+', label: 'years of experience' },
    { number: '50+', label: 'professional barbers' },
    { number: '50+', label: 'unique styles' },
    { number: '1M+', label: 'clients served' }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            We are Made Man Barbershop
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            In the fast-paced city life, self-care is crucial. At Made Man Barber Shop, we've been providing tailored services and products for over 10 years, to offer you the ultimate relaxation and satisfaction.
          </p>
          <div className="mt-8">
            <a href="/about" className="btn-primary">
              About Us
            </a>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-2">
                {stat.number}
              </div>
              <div className="text-primary-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg h-64 flex items-center justify-center">
            <span className="text-primary-600 font-medium">Barbershop Interior Image</span>
          </div>
          <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg h-64 flex items-center justify-center">
            <span className="text-primary-600 font-medium">Barber at Work Image</span>
          </div>
        </div>

        {/* Additional Content */}
        <div className="text-center">
          <p className="text-lg text-primary-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover why we are the top-rated men's barbershop in your neighborhood, known for skilled haircuts, affordable pricing, and excellent customer reviews. Book your appointment today and experience the convenience, quality, and style that make Made Man Barbershop the trusted choice for men's grooming in NYC.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/book" className="btn-primary">
              Book Your Appointment
            </a>
            <a href="/services" className="btn-secondary">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
