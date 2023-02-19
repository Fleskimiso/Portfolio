import githubIcon from "../assets/githubBlueIcon.png"
import linkedinIcon from "../assets/linkedinBlueIcon.png"
import resumeIcon from "../assets/resumeBlueIcon.png"


const Navbar = ({ setLang } : {
    setLang: (x: "pl"|"en") => void
} ) => {
    return <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid navbar-main">
            <span className="text-lighterBlue navbar-brand mr-auto">Portfolio 
            <span className="mx-5">
            <span> </span>
                <button className="btn text-lighterBlue" onClick={() => { setLang("pl") }}>PL</button>
                <button className="btn text-lighterBlue" onClick={() => { setLang("en") }} >EN</button>
            </span>
            </span>

            <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item px-3">
                        <a target="_blank" className="nav-link active" aria-current="page" href="https://www.github.com/Fleskimiso">
                            <img src={githubIcon} alt="githubIcon" width="32px" height="32px" />
                        </a>
                    </li>
                    <li className="nav-item px-3">
                        <a target="_blank" className="nav-link" href="#">
                            <img src={linkedinIcon} alt="linkedinIcon" width="32px" height="32px" />
                        </a>
                    </li>
                    <li className="nav-item px-3">
                        <a target="_blank" href="#" className="nav-link">
                            <img src={resumeIcon} alt="resumeIcon" width="32px" height="32px" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default Navbar