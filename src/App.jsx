import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoBlock from './components/VideoBlock'
import InstructorBlock from './components/InstructorBlock'
import Problem from './components/Problem'
import Audience from './components/Audience'
import Results from './components/Results'
import WhereToVibe from './components/WhereToVibe'
import Program from './components/Program'
import Format from './components/Format'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'
import SignupModal from './components/SignupModal'

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  const openSignup = () => setIsSignupOpen(true)
  const closeSignup = () => setIsSignupOpen(false)

  return (
    <>
      <Header onOpenSignup={openSignup} />
      <main>
        <Hero onOpenSignup={openSignup} />
        <VideoBlock />
        <InstructorBlock />
        <Problem />
        <Audience />
        <Results />
        <WhereToVibe />
        <Program />
        <Format />
        <Team />
        <Testimonials />
        <Pricing onOpenSignup={openSignup} />
        <FAQ />
        <FooterCTA onOpenSignup={openSignup} />
      </main>
      <SignupModal isOpen={isSignupOpen} onClose={closeSignup} />
    </>
  )
}

export default App
