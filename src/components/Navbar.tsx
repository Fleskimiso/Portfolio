import React from "react"
import githubIcon from "../assets/githubBlueIcon.png"
import linkedinIcon from "../assets/linkedinBlueIcon.png"
import resumeIcon from "../assets/resumeBlueIcon.png"


const Navbar = ({ setLang, lang } : {
    setLang: (x: "pl"|"en") => void,
    lang: "pl" | "en"
} ) => {


    //To do linked in profile
    const handleLinkedIn = (e: React.MouseEvent<HTMLAnchorElement>) =>{
        e.preventDefault();
        if(lang === "pl"){
            alert("Mój profil linkedin nie jest jeszcze gotowy :(")
        }else {
            alert("My linkedin profile is not ready :(");
        }
    }
    
    return <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid navbar-main">
            <span className="text-lighterBlue navbar-brand mr-auto">Portfolio 
            <span className="mx-5">
            <span> </span>
                <button className="btn btn-info text-light mx-1" onClick={() => { setLang("pl") }}>PL</button>
                <button className="btn btn-info text-light" onClick={() => { setLang("en") }} >EN</button>
            </span>
            </span>

            <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex flex-column flex-md-row me-auto mb-2 mb-lg-0">
                    <li className="nav-item px-3">
                        <a target="_blank" className="nav-link active" aria-current="page" href="https://www.github.com/Fleskimiso">
                            <img src={githubIcon} alt="githubIcon" width="32px" height="32px" />
                        </a>
                    </li>
                    <li className="nav-item px-3">
                        <a target="_blank" className="nav-link" href="https://www.linkedin.com/in/dawid-paw%C5%82owicz-57a98a197/">
                            <img src={linkedinIcon} alt="linkedinIcon" width="32px" height="32px" />
                        </a>
                    </li>
                    <li className="nav-item px-3">
                        <a target="_blank" href={lang === "pl" ? "/cv" : "/cveng"} className="nav-link">
                            <img src={resumeIcon} alt="resumeIcon" width="32px" height="32px" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default Navbar