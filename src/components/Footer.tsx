import githubIcon from "../assets/githubWhiteIcon.png"
import linkedinIcon from "../assets/linkedinWhiteIcon.png"
import resumeIcon from "../assets/resumeWhiteIcon.png"

const Footer = () => {
    return <div className="container-fluid bg-dark h-150px d-flex flex-row justify-content-center align-items-center">


        <a target="_blank" className="px-3 " aria-current="page" href="https://www.github.com/Fleskimiso">
            <img src={githubIcon} alt="githubIcon" width="32px" height="32px" />
        </a>
        <a target="_blank" className="px-3" href="#">
            <img src={linkedinIcon} alt="linkedinIcon" width="32px" height="32px" />
        </a>
        <a target="_blank" href="/cv" className="px-3">
            <img src={resumeIcon} alt="resumeIcon" width="32px" height="32px" />
        </a>

    </div>
}
export default Footer