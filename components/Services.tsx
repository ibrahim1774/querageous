const Services = () => {
  const services = [
    {
      name: 'Haircut',
      description: 'Our signature service, a tailored haircut that perfectly aligns with your image and style (ex. fade haircuts)',
      price: '$45',
      featured: true
    },
    {
      name: 'Shave',
      description: 'Enjoy a smooth, close shave, leaving your skin feeling refreshed and revitalized',
      price: '$45'
    },
    {
      name: 'Beard Trim',
      description: 'Maintain a sharp and well-groomed beard with our precision trims',
      price: '$27'
    },
    {
      name: 'Haircut and Beard Trim',
      description: 'Expert haircuts and beard trims tailored to your style',
      price: '$70'
    },
    {
      name: 'Neck Cleanup',
      description: 'During the hairline clean up, we\'ll trim around your sideburns, ears, and neck, ensuring a neat appearance. This service also comes with a hot towel treatment and a straight razor neck shave.',
      price: '$22'
    },
    {
      name: 'Kids Cut',
      description: 'Our establishment prides itself on providing a secure and engaging environment for children, where they benefit from attentive care. Designed for clientele aged 3 to 12 years.',
      price: '$38'
    },
    {
      name: 'THE Made Man Haircut and Shave',
      description: 'This service is a combination of a scissors and clippers haircut, a hot towel traditional straight razor shave and a face massage. (Note, this type of haircut is for short hair length).',
      price: '$80'
    },
    {
      name: 'Scissor Cut',
      description: 'Get a classic, refined look with our expert scissor cuts, perfect for any hair type',
      price: '$50'
    },
    {
      name: 'Buzz Cut',
      description: 'We\'re offer buzz cuts for a bold look',
      price: '$30'
    }
  ]

  const hairTypes = [
    { type: 'Straight', description: 'Sleek, polished styles or layered cuts for added dimension.' },
    { type: 'Curly', description: 'Expertly shaped to enhance natural curls while maintaining definition.' },
    { type: 'Wavy', description: 'Crafted to emphasize movement and volume for a stylish, effortless look.' },
    { type: 'Thick', description: 'Precision cuts to manage volume while maintaining a strong, structured style.' },
    { type: 'Coily/Kinky', description: 'Skilled techniques for shaping, defining, or tapering curls while maintaining natural texture.' },
    { type: 'Fine or Thinning Hair', description: 'Cuts that add depth and volume to create a fuller appearance.' }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Main Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Men's Haircuts Near You - Made Man Barbershop NYC
          </h2>
          <p className="text-lg text-primary-600 max-w-4xl mx-auto leading-relaxed">
            We take pride in offering exceptional men's haircut services across all of our Made Man Barbershop locations throughout New York City. Whether you're looking for a men's haircut near you or a high-end men's salon in your area, our skilled, knowledgeable, and licensed barbers are committed to providing precise, stylish cuts that are tailored to your look and personal preferences.
          </p>
          <div className="mt-8">
            <a href="/book" className="btn-primary">
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Hair Types Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 text-center mb-8">
            A HAIRCUT FOR EVERY STYLE AND HAIR TYPE
          </h3>
          <p className="text-lg text-primary-600 text-center mb-12 max-w-4xl mx-auto">
            Our barbers have the knowledge and experience needed to provide a variety of men's haircuts, making sure that every client leaves looking their absolute best. Whether you prefer a modern fade, a classic scissor trim, or a sharp buzz cut, there is a men's hair stylist on our team for any type of haircut or services.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="card">
              <h4 className="font-semibold text-primary-800 mb-2">Fades & Tapers</h4>
              <p className="text-primary-600">A go-to option for a clean, modern look with seamless blending.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-primary-800 mb-2">Scissor Cuts</h4>
              <p className="text-primary-600">Perfect for those who want a more natural finish with added texture and movement.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-primary-800 mb-2">Buzz Cuts</h4>
              <p className="text-primary-600">A low-maintenance, sharp, and crisp look that's always in style.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold text-primary-800 mb-2">Long Hair Styling</h4>
              <p className="text-primary-600">Created for men who prefer length, whether it's layered cuts or structured trims to enhance flow.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairTypes.map((hairType, index) => (
              <div key={index} className="card">
                <h4 className="font-semibold text-primary-800 mb-2">{hairType.type}</h4>
                <p className="text-primary-600">{hairType.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 text-center mb-12">
            OUR MEN'S SALON SERVICES
          </h3>
          <p className="text-lg text-primary-600 text-center mb-12 max-w-3xl mx-auto">
            From long layered cuts, to shorter edgier cuts, we bring our clients diverse expertise from around the globe
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`card ${service.featured ? 'ring-2 ring-accent-500' : ''}`}>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-primary-800 mb-3">{service.name}</h4>
                  <p className="text-primary-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-accent-600">{service.price}</div>
                  {service.featured && (
                    <span className="inline-block bg-accent-100 text-accent-800 text-xs font-semibold px-2 py-1 rounded-full mt-2">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
