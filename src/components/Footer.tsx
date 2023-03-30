import githubIcon from "../assets/githubWhiteIcon.png"
import linkedinIcon from "../assets/linkedinWhiteIcon.png"
import resumeIcon from "../assets/resumeWhiteIcon.png"

const Footer = (props: {lang: "pl" | "en"}) => {

    const handleLinkedIn = (e: React.MouseEvent<HTMLAnchorElement>) =>{
        e.preventDefault();
        if(props.lang === "pl"){
            alert("Mój profil linkedin nie jest jeszcze gotowy :(")
        }else {
            alert("My linkedin profile is not ready :(");
        }
    }
    return <div className="container-fluid bg-dark h-150px d-flex flex-row justify-content-center align-items-center">


        <a target="_blank" className="px-3 " aria-current="page" href="https://www.github.com/Fleskimiso">
            <img src={githubIcon} alt="githubIcon" width="32px" height="32px" />
        </a>
        <a target="_blank" className="px-3" href="https://www.linkedin.com/in/dawid-paw%C5%82owicz-57a98a197/">
            <img src={linkedinIcon} alt="linkedinIcon" width="32px" height="32px" />
        </a>
        <a target="_blank" href={props.lang === "pl" ? "/cv" : "/cveng"} className="px-3">
            <img src={resumeIcon} alt="resumeIcon" width="32px" height="32px" />
        </a>

    </div>
}
export default Footer