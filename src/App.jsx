import { useEffect, useState } from 'react'
import scrambleText from './utils/scrambleText'
import './App.css'

import ContactForm from './components/ContactForm'
import Intro from './components/Intro'
import Clients from './components/Clients'
import Awards from './components/Awards'
import Contact from './components/Contact'

const line1 = 'Gareth Pitchford'
const line2 = 'Freelance Engineer'

export default function App() {
  const [headerText1, setHeaderText1] = useState('')
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (frame <= line1.length + line2.length) {
      const interval = setInterval(() => {
        if (frame <= line1.length) {
          setHeaderText1(scrambleText(line1, frame))
        } else {
          setHeaderText1(line1)
        }
        setFrame(f => f + 1)
      }, 40)
      return () => clearInterval(interval)
    } else {
      setHeaderText1(line1)
    }
  }, [frame])

  return (
    <>
      <div id="header">
        <div id="text-container">
          <h1>{headerText1}</h1>
          <Intro />
          <Clients />
          <Awards />
          <Contact />
        </div>
        <div id="image-container" className="flex flex-col items-center space-y-4">
          <img src="me.png"/>
          <ContactForm />
        </div>
      </div>
    </>
  )
}