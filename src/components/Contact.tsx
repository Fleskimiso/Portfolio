const Contact = (props: { lang: "pl" | "en" }) => {
    return <div id='contact' className="mb-4">
        <div className="fs-2 text-dark  text-center"> {props.lang === "pl" ? "Kontakt" : "Contact"}</div>
        <form action="/" method="post" className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto"  >
            <div className="mb-3">
                <label htmlFor="name" className="form-label"> {props.lang === "pl" ? "Imię" : "Name"} </label>
                <input type="text" name="name" className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label"> {props.lang === "pl" ? "Wiadomość" : "Message"}</label>
                <textarea defaultValue="" className="form-control" id="message" />
            </div>


            <div className="justify-content-center d-flex flex-row">
                <button type="submit" className="btn customBorder text-lighterBlue ">
                    {props.lang === "pl" ? "Wyślij" : "Send"}
                </button>
            </div>
        </form>
    </div>
}
export default Contact;