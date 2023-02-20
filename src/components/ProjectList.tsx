import { useState } from "react";
import yelpcamp1_url from "../assets/YelpCamp1_640.png";
import yelpcamp2_url from "../assets/YelpCamp2_640.png";
import portfolio1_url from "../assets/portfolio1_1900.png";
import portfolio2_url from "../assets/portfolio2_1900.png";
import tracker1_url from "../assets/tracker1_1900.png"
import tracker2_url from "../assets/tracker2_530x820.png"
import { log } from "console";

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
            note: ["Proszę poczekać 15-30s na załadowanie strony", "Please wait 15-30s for page to load"],
            imgs: [yelpcamp1_url, yelpcamp2_url],
            currentIndex: 0,
            appLink: "https://yelpcamp-4xg4.onrender.com",
            gitLink: "https://github.com/Fleskimiso/YelpCamp",
        },
        {
            title: "Portfolio",
            keyTechnologies: ["TypeScript", "React", "Vite", "CSS", "BootStrap", "HTML"],
            desc: ["Strona z moim portfolio, gdzie można zobaczyć moje projekty i poznać mnie bliżej.",
                "My portfolio page, where you can see my projects and get to know me closer."],
            imgs: [portfolio1_url, portfolio2_url],
            currentIndex: 0,
            note: [],
            gitLink: "https://github.com/Fleskimiso/Portfolio/",
            appLink: "http://localhost:5173/"
        },
        {
            title: "ProgressionTracker",
            keyTechnologies: ["TypeScript", "Webpack", "React", "Redux", "NGINX", "ExpressJS", "MongoDB", "NodeJS", "PassportJS"],
            desc: ["Moja aplikacja treningowa, której sam używam do monitorowania i zbierania danych na temat progresu treningowego.\
            Aplikacja pozwala na dodawanie danych wykonanych treningów jak również do ustalenie swojego planu treningowe.\
            Aplikacja fullstack wdrożona na własnym serwerze na linode", "\
                My training application, which I use to monitor and collect data about training progress. \
                Application allows you to add data about training you have done and also to set your training plan.\
                Fullstack application developed on my own server on linode."],
            imgs: [tracker1_url, tracker2_url],
            currentIndex: 0,
            note: [],
            gitLink: "https://github.com/Fleskimiso/ProgressionTracker",
            appLink: "https://progressiontracker.vexor.pl"
        }
    ])

    return <div className="container-fluid" id='projects'>
        <div className="title text-center fs-4 mb-4 mt-5"> {props.lang === "pl" ? "Projekty" : "Projects"}</div>
        <div className="d-flex flex-column">
            {projects.map((project, index) => {
                return <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-left col-lg-10 col-xxl-8 mx-auto mb-5" key={project.title}>
                    <div className="col-8 col-lg-4 ">
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
                            {props.lang === "pl" ? project.note[0] : project.note[1]}
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
                    <div className="mx-lg-auto my-5">
                        <div >
                            <div className="">
                                <div className="">
                                    <img src={project.imgs[project.currentIndex]} className="projectImg" alt="..." />
                                </div>
                            </div>
                            <div className="mt-3 d-flex flex-row justify-content-evenly align-items-center">
                                <button onClick={() => {
                                    //changing current img index of current project inline 
                                    //module by project imgs length when set over length boundary
                                    const currentIndex = (project.currentIndex - 1 === -1 ? project.imgs.length - 1 : project.currentIndex - 1);
                                    const newprojects = [...projects];
                                    projects[index].currentIndex = currentIndex;
                                    setProjects(newprojects);
                                }} className="btn customBorder" type="button" >
                                    <span className="">Previous</span>
                                </button>
                                <button onClick={() => {
                                    const currentIndex = (project.currentIndex + 1 === project.imgs.length ? 0 : project.currentIndex + 1)
                                    const newprojects = [...projects];
                                    projects[index].currentIndex = currentIndex;
                                    setProjects(newprojects);
                                }}
                                    className="btn customBorder" type="button" >
                                    <span className="">Next</span>
                                </button>
                            </div>
                        </div>


                    </div>

                </div>
            })}
        </div>
    </div>
}

export default ProjectList;