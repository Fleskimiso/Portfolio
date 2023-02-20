const AboutMe = (props: { lang: "pl" | "en" }) => {
    return <div className="container-fluid vh-100 bg-gradient-aqua d-flex flex-column justify-content-between align-items-center" id='about-me'>
        <div className="left-white-traingle"></div>
        <div className="">
            <div className="fs-2 text-white text-center">
                {props.lang === "pl" ? "O mnie" : "About me"}
            </div>
            <div className="text-white text-center fs-5 mx-auto col-10 col-sm-8 col-md-6 col-lg-4 ">
                "TO DO"
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit magni assumenda ipsam dolor corrupti ut quod reprehenderit exercitationem, soluta maxime qui quasi ex provident et. Necessitatibus cupiditate explicabo itaque culpa!
                Corrupti similique delectus, labore eaque hic iure odit. Tenetur aperiam adipisci dolore quia obcaecati commodi minima officia laboriosam doloribus? Corrupti pariatur commodi neque soluta. Illum perspiciatis laboriosam illo alias aut!
                Iure porro asperiores dolore totam culpa voluptates, quam harum ipsa nobis aut. Dolor, facere perferendis ipsam, unde fugit quibusdam nisi corrupti maiores quasi obcaecati officiis soluta ipsa laborum quis nostrum?
                <div className="d-flex justify-content-left mt-3">
                <button className="btn customBorder me-3">
                    {/* to do add cv */}
                    <a target="_blank" className="text-decoration-none text-white" href="#">CV</a>
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