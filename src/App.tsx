import { useState } from 'react'
import Navbar from './components/Navbar'
import SkillList from './components/SkillList'
import "./assets/css/custom.css"
import ShortDescription from './components/ShortDescription'
import ProjectList from './components/ProjectList'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [lang, setLang] = useState<"pl" | "en">("pl");

  return (
    <div className="App">
      <div className='vh-100'>
        <Navbar setLang={setLang} />
        <ShortDescription lang={lang} />
      </div>

    <SkillList lang={lang} />
    <ProjectList  lang={lang}/>
    <AboutMe lang={lang} />
    <Contact lang={lang} />
    <Footer />

    </div>
  )
}

export default App
