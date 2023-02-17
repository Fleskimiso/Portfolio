import { useState } from 'react'
import Navbar from './components/Navbar'
import "./assets/css/custom.css"
import ShortDescription from './components/ShortDescription'


function App() {
  const [lang, setLang] = useState<"pl" | "en">("pl");

  return (
    <div className="App">
      <div className='vh-100'>
        <Navbar setLang={setLang} />
        <ShortDescription lang={lang} />
      </div>

      <div id='skills'>Skills Container</div>
      <div id='projects'> Projekty</div>
      <div id='about-me'>O mnie </div>
      <div id='contact'>Contact</div>

    </div>
  )
}

export default App
