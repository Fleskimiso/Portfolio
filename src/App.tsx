import { useState } from 'react'
import Navbar from './components/Navbar'
import SkillList from './components/SkillList'
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

    <SkillList lang={lang} />
      <div id='projects'> Projekty</div>
      <div id='about-me'>O mnie </div>
      <div id='contact'>Contact</div>

    </div>
  )
}

export default App
