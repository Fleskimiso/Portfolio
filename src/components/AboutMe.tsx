const AboutMe = (props: { lang: "pl" | "en" }) => {
    return <div className="container-fluid vh-100 bg-gradient-aqua d-flex flex-column justify-content-between align-items-center" id='about-me'>
        <div className="left-white-traingle"></div>
        <div className="w-auto">
            <div className="fs-2 text-white text-center">
                {props.lang === "pl" ? "O mnie" : "About me"}
            </div>
            <div className="text-white text-left fs-5 mx-auto col-12 col-sm-10 col-md-8 col-lg-6 ">

                {props.lang === "pl" ?
                    <div className=""  style={{ "textIndent": "10%" }}>
                        <p>
                            Cześć, mam na imię Dawid Pawłowicz i jestem developerem. Jestem na początku swojej kariery programistycznej
                            i szukam okazji i możliwości do rozwoju swoich umiejętności. Interesuje się 
                            inżynierią aplikacji moblinych, natywnych i w szczególnosci serwisów webowych , devOps'em, linux'em.
                        </p>
                        <p>
                            Największe doświadczenie posiadam w stacku technologicznym
                            javascript (MERN), jednak mam też mniejsze doświadczenie innych językach jako chociażby Python, C++, Java.
                        </p>
                        <p>
                            Zainteresowanie w dziedzinie IT posiadam od paru lat i chce je cały czas rozwijać. 
                        </p>
                        <div style={{ "textIndent": "0%" }}>
                            W wolnym czasie uwielbiam uprawiać sport.
                        </div>
                    </div> : <div>
                        <p>
                            Hello, my name is Dawid Pawłowicz and I am a developer. I started my career as a programmer
                            and I am looking for a job and opportunities to develop my skills. I am interested in 
                            engineering mobile, native applications and especially web services , devOps, linux.</p>
                        <p>
                            The biggest experience I have
                            is in the javascript stack (MERN),however  I have also other languages such as Python, C++, Java.
                        </p>
                        <p>
                        I have been interested in IT domain for a few years and I want to continue to develop my interest in it.
                        </p>
                        <div style={{ "textIndent": "0%" }}>
                            I like to exercise in free time.
                        </div>
                    </div>
                }

                <div className="d-flex flex-row justify-content-center mt-3">
                    <button className="btn customBorder me-3">
                        {/* to do add cv */}
                        <a target="_blank" className="text-decoration-none text-white" href={props.lang === "pl" ? "/cv" : "/cveng"}>CV</a>
                    </button>
                    <button className="btn customBorder ">
                        <a href="https://www.github.com/Fleskimiso" target="_blank" className="text-white text-decoration-none" >Github</a>
                    </button>
                </div>
            </div>

        </div>
        <div className="white-traingle"></div>
    </div>
}
export default AboutMe