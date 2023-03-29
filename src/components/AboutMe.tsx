const AboutMe = (props: { lang: "pl" | "en" }) => {
    return <div className="container-fluid vh-100 bg-gradient-aqua d-flex flex-column justify-content-between align-items-center" id='about-me'>
        <div className="left-white-traingle"></div>
        <div className="w-auto">
            <div className="fs-2 text-white text-center">
                {props.lang === "pl" ? "O mnie" : "About me"}
            </div>
            <div className="text-white text-left fs-5 mx-auto col-10 col-sm-8 col-md-6 col-lg-4 ">

                {props.lang === "pl" ?
                    <div style={{ "textIndent": "10%" }}>
                        <p>
                            Cześć, mam na imię Dawid Pawłowicz mam 20 lat i jestem web developerem. Jestem na początku swojej kariery programistycznej
                            i szukam okazji i możliwości do rozwoju swoich umiejętności.
                        </p>
                        <p>
                            Największe doświadczenie posiadam w stacku technologicznym
                            javascript (MERN), jednak mam też mniejsze doświadczenie innych językach jako chociażby Python, C++, Java.
                        </p>
                        <p>
                            Swoją przygodę z programowaniem zacząłem w roku 2018 od nauki C++, jednak od paru miesięcy wziąłem się poważniej za rozwój
                            i uznałem, że techonologie internetowe to dziedzina, która najbardziej mnie interesuje.
                        </p>
                        <div style={{ "textIndent": "0%" }}>
                            W wolnym czasie uwielbiam uprawiać sport.
                        </div>
                    </div> : <div>
                        <p>
                            Hello, my name is Dawid Pawłowicz, I am 20 years old and I am a web developer. I started my career as a programmer
                            and I am looking for a job and opportunities to develop my skills.</p>
                        <p>
                            The biggest experience I have
                            is in the stack javascript (MERN), but I have also other languages as Python, C, Java.
                        </p>
                        <p>
                            My first programming experience started in 2018 learning C++,
                            but I took a bigger take on my development since last few months
                            and decided that internet technologies are what is the most interesting to me.
                        </p>
                        <div style={{ "textIndent": "0%" }}>
                            I like to exercise in free time.
                        </div>
                    </div>
                }

                <div className="d-flex flex-row justify-content-center mt-3">
                    <button className="btn customBorder me-3">
                        {/* to do add cv */}
                        <a target="_blank" className="text-decoration-none text-white" href="/cv">CV</a>
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