const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white section-padding">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Best Men's Haircut Near You. Barbershop in NYC With Multiple Manhattan Locations.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
            One Perfect Cut.
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-primary-200 leading-relaxed max-w-3xl mx-auto">
            Experience affordable and unmatched craftsmanship at Manhattan's finest barbershop
          </p>
          
          <a 
            href="/book" 
            className="btn-primary text-lg px-8 py-4 inline-block hover:scale-105 transition-transform duration-200"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
