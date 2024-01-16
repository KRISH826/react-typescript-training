import React, { useState } from 'react'
import homeStyles from "./../styles/home.module.scss";

const FormSubmit = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newUser = { name, email }
        console.log(newUser)
    }
    return (
        <div>
            <form className={homeStyles.form_part} onSubmit={SubmitHandler}>
                <div>
                    <label htmlFor='name'>First Name</label>
                    <input className={homeStyles.input} type='text' id='name' value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='mail'>First Name</label>
                    <input type='email' id='mail' value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <button style={{ color: "white" }}>Submit</button>
            </form>
        </div>
    )
}

export default FormSubmit
