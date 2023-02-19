import { useState } from "react";
import yelpcamp1_url from "../assets/YelpCamp1_640.png"
import yelpcamp2_url from "../assets/YelpCamp2_640.png"

const ProjectList = (props: { lang: "pl" | "en" }) => {

    const [projects, setProjects] = useState([
        {
            title: "YelpCamp",
            keyTechnologies: ["Javascript", "React", "MapBox", "Bootstrap", "ExpressJS", "Mongoose", "MongoDB"],
            desc: ["Aplikacja w której użytkownicy mogą dodawać i opisywać swoje obozowiska. Natomiast inni użytkownicy mogą  \
            je zobaczyć, oceniać i komentować. Dodawanie obozowisk posiada wsparcie lokalizacja dzięki bibliotece mapbox. \
            Aby korzystać z aplikacja trzeba założyć przykładowe konto",
                "Web application where users can add and describe their campground. Other users can \
             see, rate and comment other people's campgrounds. Adding campgrounds has support for location \
             by using mapbox library. To use the application you need to create an example account."
            ],
            imgs: [yelpcamp1_url, yelpcamp2_url],
            appLink: "https://yelpcamp-4xg4.onrender.com",
            gitLink: "https://github.com/Fleskimiso/YelpCamp",
        },
        {
            title: "Portfolio",
            keyTechnologies: ["TypeScript", "React", "Vite", "CSS", "BootStrap", "HTML"],
            desc: ["moje portfolio xD", "My portfolio"],
            imgs: [],
            gitLink: "https://github.com/Fleskimiso/Portfolio/",
            appLink: "http://localhost:5173/"
        },
        {
            title: "ProgressionTracker",
            keyTechnologies: ["TypeScript", "Webpack", "React", "Redux", "ExpressJS", "MongoDB", "NodeJS", "PassportJS"],
            desc: ["moja aplikacja treningowa", "my workout app"],
            imgs: [],
            gitLink: "https://github.com/Fleskimiso/ProgressionTracker",
            appLink: "https://progressiontracker.vexor.pl"
        }
    ])

    return <div className="container-fluid" id='projects'>
        <div className="title text-center fs-4 mb-4 mt-5"> {props.lang === "pl" ? "Projekty" : "Projects"}</div>
        <div className="d-flex flex-column">
            {projects.map(project => {
                return <div className="d-flex flex-row justify-content-center mb-5" key={project.title}>
                    <div className="col-3">
                        <div className="text-left fs-3">{project.title}</div>
                        <div className="d-flex flex-row justify-content-left flex-wrap" >
                            {project.keyTechnologies.map(tech => {
                                return <div key={tech} className="text-white bg-secondary my-1 mx-1 p-2">{tech}</div>
                            })}
                        </div>
                        <div className="mt-2">
                            {props.lang === "pl" ? project.desc[0] : project.desc[1]}
                        </div>
                        <div className="mt-2">
                            <button className="btn customBorder me-3">
                                <a className="text-lighterBlue fs-5 text-decoration-none" href={project.appLink} target="_blank" rel="noopener noreferrer">{props.lang === "pl" ? "\
                    Aplikacja" : "Live"}</a>
                            </button>
                            <button className="btn customBorder">
                                <a className="text-lighterBlue fs-5 text-decoration-none" href={project.gitLink} target="_blank" rel="noopener noreferrer">Github</a>
                            </button>
                        </div>
                    </div>
                    <div>
                        "Here should be the img"
                    </div>

                </div>
            })}
        </div>
    </div>
}

export default ProjectList;