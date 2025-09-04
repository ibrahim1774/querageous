import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import StyleGallery from '@/components/StyleGallery'
import Locations from '@/components/Locations'
import About from '@/components/About'
import Instagram from '@/components/Instagram'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <StyleGallery />
      <Locations />
      <About />
      <Instagram />
      <Footer />
    </main>
  )
}
