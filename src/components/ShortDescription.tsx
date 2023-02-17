
const ShortDescription = (props: { lang: string; } ) => {
   return <div className='container h-100  d-flex flex-column'>
        <div className="flex-basis-30"></div>
        <div className='d-flex flex-basis-70  flex-column '>
            <div className='fs-1 fw-bold' >Cześć, mam na imię <span className="text-primary">Dawid</span></div>
            <div className='fs-1 fw-bold'>Jestem web developer.</div>
            <div className='d-flex flex-row pt-2 custom-buttons-list-effect'>
                <div className='me-2 '>
                    <button className='btn border border-primary custom-hover-effect'>
                        <a className='text-decoration-none text-black' href="#somehash">
                            {props.lang === "pl" ? "Umiejętności" : "Skills"}
                        </a>
                    </button>
                </div>
                <div className='mx-2 '>
                    <button className='btn border border-primary custom-hover-effect'>
                        <a className='text-decoration-none text-black' href="#somehash">
                        {props.lang === "pl" ? "projekty" : "Projects"}
                        </a>
                    </button>
                </div>
                <div className='mx-2 '>
                    <button className='btn border border-primary custom-hover-effect'>
                        <a className='text-decoration-none text-black' href="#somehash">
                        {props.lang === "pl" ? "O mnie" : "About me"}
                        </a>
                    </button>
                </div>
                <div className='mx-2 '>
                    <button className='btn border border-primary custom-hover-effect'>
                        <a className='text-decoration-none text-black' href="#somehash">
                         {props.lang === "pl" ? "Kontakt" : "Contact"}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default ShortDescription;