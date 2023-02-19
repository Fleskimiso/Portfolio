
const SkillList = (props: { lang: "pl" | "en" }) => {
    return <div className="" id='skills'>
        <div className="container-fluid vh-50 bg-gradient-blue-aqua d-flex justify-content-between flex-column">
            <div className="fs-2 text-center mt-3 text-white">{props.lang === "pl" ? "Umiejętności" : "Skills"}</div>
            <div className="white-traingle">
            </div>
        </div>
        {/* d-flex flex-md-row flex-column justify-content-center */}
        <div className="container mx-auto d-flex justify-content-between flex-wrap  vw-100">
            <div className="card bg-gradient-aqua text-white mb-5 mb-md-0 col-12 col-md-5 col-xl-3">
                <div className="card-header  text-center">Front-End</div>
                <ul className="card-body  ms-3">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript & TypeScript</li>
                    <li>React</li>
                    <li>Redux-Toolkit</li>
                    <li>Webpack/Vite</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="card bg-gradient-aqua text-white col-12 col-md-5 col-xl-3">
                <div className="card-header text-center">Back-End</div>
                <ul className="card-body ms-3">
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>SQL</li>
                    <li>REST API</li>
                </ul>
            </div>
            <div className="card bg-gradient-aqua text-white mt-5 mt-md-4 mx-md-auto mx-xl-0 mt-xl-0 col-12 col-md-5 col-xl-3">
                <div className="card-header text-center">{props.lang === "pl" ? "Inne" : "Others"} </div>
                <ul className="card-body ms-3">
                    <li>Linux/Bash</li>
                    <li>Git/Github</li>
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>Java/Kotlin</li>
                </ul>
            </div>
        </div>
    </div>
}

export default SkillList