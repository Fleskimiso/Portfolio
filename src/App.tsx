import { useState } from 'react'
import Navbar from './components/Navbar'
import "./assets/css/custom.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='vh-100'>
        <Navbar />
        <div className='container h-100  d-flex flex-column'>
          <div className="flex-basis-30"></div>
          <div className='d-flex flex-basis-70  flex-column '>
            <div className='fs-1 fw-bold' >Cześć, mam na imię <span className="text-primary">Dawid</span></div>
            <div className='fs-1 fw-bold'>Jestem web developer.</div>
            <div className='d-flex flex-row pt-2 custom-buttons-list-effect'>
              <div className='me-2 '>
                <button className='btn border border-primary custom-hover-effect'>
                  <a className='text-decoration-none text-black' href="#somehash">Umiejętności</a>
                </button>
              </div>
              <div className='mx-2 '>
                <button className='btn border border-primary custom-hover-effect'>
                  <a className='text-decoration-none text-black' href="#somehash">projekty</a>
                </button>
              </div>
              <div className='mx-2 '>
                <button className='btn border border-primary custom-hover-effect'>
                  <a className='text-decoration-none text-black' href="#somehash">O mnie</a>
                </button>
              </div>
              <div className='mx-2 '>
                <button className='btn border border-primary custom-hover-effect'>
                <a className='text-decoration-none text-black' href="#somehash">Kontakt</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='somehash'>I should be below Container</div>

    </div>
  )
}

export default App
