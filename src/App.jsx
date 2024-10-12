import { useState } from 'react'
import Navbar from './Section/Navbar'
import Hero from './Section/Hero'
import About from './Section/About'
import Project from './Section/Projects'
import Contact from './Section/Contact'
import Footer from './Section/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className='max-w-7xl mx-auto'>

   <Navbar />
   <Hero />
   <About />
   <Project />
   <Contact />
   <Footer />
     </main>
    
    </>
  )
}

export default App
