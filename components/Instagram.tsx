const Instagram = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            We are on Instagram
          </h2>
          <a 
            href="https://instagram.com/mademan.barber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl font-bold text-accent-600 hover:text-accent-700 transition-colors"
          >
            @mademan.barber
          </a>
        </div>

        {/* Instagram Feed Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg flex items-center justify-center">
              <span className="text-primary-600 text-xs font-medium">IG Post</span>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center">
          <p className="text-lg text-primary-600 mb-6">
            Follow us for the latest styles, behind-the-scenes content, and exclusive offers!
          </p>
          <a 
            href="https://instagram.com/mademan.barber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Instagram
