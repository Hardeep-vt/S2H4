import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Footer />
    </main>
  )
}
