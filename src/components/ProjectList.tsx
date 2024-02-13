import { useState } from "react";
import yelpcamp1_url from "../assets/YelpCamp1_640.png";
import yelpcamp2_url from "../assets/YelpCamp2_640.png";
import portfolio1_url from "../assets/portfolio1_1900.png";
import portfolio2_url from "../assets/portfolio2_1900.png";
import tracker1_url from "../assets/tracker1_1900.png";
import tracker2_url from "../assets/tracker2_530x820.png";
import chatlin1_url from "../assets/chatlin1_1900.png";
import historia1_url from "../assets/historia1_1900.png";
import historia2_url from "../assets/historia2_1900.png";
import invoicing1_url from "../assets/invoicing1.png";
import invoicing2_url from "../assets/invoicing2.png";

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
            appLink: "https://www.veraxus.pl"
        },
        {
            title: "ProgressionTracker",
            keyTechnologies: ["TypeScript", "Webpack", "React", "Redux", "PWA", "NGINX", "ExpressJS", "MongoDB", "NodeJS", "PassportJS"],
            desc: ["Moja aplikacja treningowa, której sam używam do monitorowania i zbierania danych na temat progresu treningowego.\
            Aplikacja pozwala na dodawanie danych wykonanych treningów jak również do ustalenie swojego planu treningowe.\
            Aplikacja fullstack PWA wdrożona na własnym serwerze na linode", "\
                My training application, which I use to monitor and collect data about training progress. \
                Application allows you to add data about training you have done and also to set your training plan.\
                Fullstack PWA application developed on my own server on linode."],
            imgs: [tracker1_url, tracker2_url],
            currentIndex: 0,
            note: [],
            gitLink: "https://github.com/Fleskimiso/ProgressionTracker",
            appLink: "https://progressiontracker.veraxus.pl"
        }
    ]);

    const [commProjects, setcommProjects] = useState([
        {
            title: "chatApp",
            titleEng: "chatApp",
            keyTechnologies: ["TypeScript", "React", "Redux", "Socket.IO"
                , "ExpressJS", "MongoDB", "NodeJS", "PassportJS", "HTML", "CSS", "Bootstrap"],
            desc: ["Przykładowa aplikacja komunikacyjna, która pozwala na komunikację w czasie\
         rzeczywistym z innymi użytkownikami. Przykład projektu wykonany na zlecenie dla pewnej osoby.\
            Nadal w fazie rozwoju. Główną technologią dzięki, której aplikacja funkcjonuję jest \
            biblioteka Socket.IO",
                "A simple chat application, which allows you to communicate in real time with other users.\
            This is a project I did for a certain client. It is still in development phase. The main\
            technology which makes this application work is Socket.IO library."],
            imgs: [chatlin1_url],
            currentIndex: 0,
            note: ["",""],
            gitLink: "",
            appLink: "https://chatlin.veraxus.pl",
            collabolators: [] 
        },
        {
            title: "Invoicing application",
            titleEng: "Invoicing application",
            keyTechnologies: ["AWS", "Linux",  "Java", "Spring", "Groovy", "Gradle", "Junit", "MongoDB", "Hibernate", 
         "Angular", "HTML", "CSS", "Bootstrap" ],
            desc: [" Aplikacja do zarządania fakturami stworzona na kursie Java Developer.\
            Posiada pełne wsparcie REST do dodawania, edycji, zarządzania fakturami i kontrahentami. \
            Posiada również wbudowany kalkulator VAT. Zbudowana głownie w techonologiach Spring/Angular, zhostowany na aws",
            "An invoice management application developed on a Java Developer course \
            It has full REST support for adding, editing, managing invoices and contractors. \
            It also has a built-in VAT calculator. Built primarily in Spring/Angular techonologies, hosted on aws."
        ],
            imgs: [invoicing1_url, invoicing2_url],
            currentIndex: 0,
            gitLink: "https://github.com/Fleskimiso/invoicing-system-dawid-pawlowicz",
            note: ["" , ""],
            appLink: "https://invoicing.veraxus.pl",
            collabolators: ["Kamil Dzietczyk"]
        },
        {
            title: "Historia internetu",
            titleEng: "Internet History",
            keyTechnologies: ["HTML", "CSS", "Firebase"],
            desc: ["Projekty wykonany na zlecenie dla pewnej studentki. Prosty projekt\
            opiera się głównie podstawowym html'u i css'u. Zhostowany na firebase.",
            "A simple project I did for a student. It is based on basic html and css\
                and is hosted on firebase."],
            imgs: [historia1_url, historia2_url],
            currentIndex: 0,
            gitLink: "",
            note: ["", ""],
            appLink: "https://historiainternetu-89c4a.web.app/index.html",
            collabolators: []
        }
    ])

    return <div className="container-fluid" id='projects'>
        <div className="title text-center fs-3 mb-4 mt-5"> {props.lang === "pl" ? "Projekty" : "Projects"}</div>
        <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
            <button className="btn customBorder me-3">
                <a href="#commercial" className="text-lighterBlue fs-5 text-decoration-none">{props.lang === "pl" ? "Dla ludzi" : "For People"}</a>
            </button>
            <button className="btn customBorder">
                <a href="#personal" className="text-lighterBlue fs-5 text-decoration-none">{props.lang === "pl" ? "Personalne" : "Personal"}</a>
            </button>
        </div>

        <div id="commercial" className="title text-center fs-4 mb-4 mt-5">{props.lang === "pl" ? "Projekty dla wykonane dla ludzi" : "Projects made for people"}</div>

        <div className="d-flex flex-column">
            {commProjects.map((project, index) => {
                return <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-left col-lg-10 col-xxl-8 mx-auto mb-5" key={project.title}>
                    <div className="col-8 col-lg-4 ">
                        <div className="text-left fs-3">{props.lang === "pl" ? project.title : project.titleEng}</div>
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
                            {
                                project.gitLink !== "" ? <button className="btn customBorder">
                                <a className="text-lighterBlue fs-5 text-decoration-none" href={project.gitLink} target="_blank" rel="noopener noreferrer">Github</a>
                            </button> : ""
                            }
                        </div>
                    </div>
                    <div className="mx-lg-auto my-5">
                        <div >
                            <div className="">
                                <div className="">
                                    <img src={project.imgs[project.currentIndex]} className="projectImg" alt="..." />
                                </div>
                            </div>
                            {
                                project.imgs.length > 1 ? <div className="mt-3 d-flex flex-row justify-content-evenly align-items-center">
                                <button onClick={() => {
                                    //changing current img index of current project inline 
                                    //module by project imgs length when set over length boundary
                                    const currentIndex = (project.currentIndex - 1 === -1 ? project.imgs.length - 1 : project.currentIndex - 1);
                                    const newprojects = [...commProjects];
                                    commProjects[index].currentIndex = currentIndex;
                                    setcommProjects(newprojects);
                                }} className="btn customBorder" type="button" >
                                    <span className=""> {props.lang === "pl" ? "Poprzedni" : "Previous"} </span>
                                </button>
                                <button onClick={() => {
                                    const currentIndex = (project.currentIndex + 1 === project.imgs.length ? 0 : project.currentIndex + 1)
                                    const newprojects = [...commProjects];
                                    commProjects[index].currentIndex = currentIndex;
                                    setcommProjects(newprojects);
                                }}
                                    className="btn customBorder" type="button" >
                                    <span className="">{props.lang === "pl" ? "Następny" : "Next"}</span>
                                </button>
                            </div> : ""
                            }
                        </div>


                    </div>

                </div>
            })}
        </div>

        {/* a BREEEEAK  */}
        <div id="personal" className="title text-center fs-4 mb-4 mt-5"> {props.lang === "pl" ? "Personalne Projekty" : "Personal Projects"}</div>
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
                                    <span className=""> {props.lang === "pl" ? "Poprzedni" : "Previous"} </span>
                                </button>
                                <button onClick={() => {
                                    const currentIndex = (project.currentIndex + 1 === project.imgs.length ? 0 : project.currentIndex + 1)
                                    const newprojects = [...projects];
                                    projects[index].currentIndex = currentIndex;
                                    setProjects(newprojects);
                                }}
                                    className="btn customBorder" type="button" >
                                    <span className="">{props.lang === "pl" ? "Następny" : "Next"}</span>
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