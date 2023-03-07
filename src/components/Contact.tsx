import React, { useState } from "react";
import axios from "axios"

const Contact = (props: { lang: "pl" | "en" }) => {

    const [responseMessage, setresponseMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")


    const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axios.post("/", {
            email: email,
            name: name,
            message: message
        }).then(response => {
            if (response.status === 200) {
                if (props.lang === "pl") {
                    setresponseMessage("Pomyślnie wysłano wiadomość");
                } else {
                    setresponseMessage("Message sent successfully");
                }
            }
        }).catch(e => {
            if (props.lang === "pl") {
                setresponseMessage("Wystąpił błąd podczas wykonywania żądania");
            } else {
                setresponseMessage("An error occured during the request");
            }
        });
    }

    return <div id='contact' className="mb-4">
        <div className="fs-2 text-dark  text-center"> {props.lang === "pl" ? "Kontakt" : "Contact"}</div>
        <form action="/" method="post" className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto"  >
            <div className="mb-3">
                <label htmlFor="name" className="form-label"> {props.lang === "pl" ? "Imię" : "Name"} </label>
                <input
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    type="text" name="name" className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label"> {props.lang === "pl" ? "Adress email" : "Email address"} </label>
                <input
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label"> {props.lang === "pl" ? "Wiadomość" : "Message"}</label>
                <textarea value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                    className="form-control" id="message" />
            </div>


            <div className="justify-content-center d-flex flex-row">
                <button type="submit" onClick={submitForm} className="btn customBorder text-lighterBlue ">
                    {props.lang === "pl" ? "Wyślij" : "Send"}
                </button>
            </div>
            <div className="text-center text-lighterBlue mt-3">
                {/* Your request was successful */}
                {responseMessage} {responseMessage !== "" ? <button className="btn customBorder text-dark"
                onClick={e=>setresponseMessage("")}>
                        X
                </button> : ""}
            </div>
        </form>
    </div>
}
export default Contact;