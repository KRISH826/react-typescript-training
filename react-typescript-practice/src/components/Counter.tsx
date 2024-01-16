import React, { useState } from "react";
import homeStyles from "./../styles/home.module.scss";

type user = {
    id: number,
    name: 'krish'
}

const Counter = () => {
    // const [counter, setcounter] = useState<user | null>(null);
    // optional chaining remove
    const [user, setuser] = useState<user>({} as user);
    const [name, setname] = useState('');
    const addHandler = () => {
        setuser({ id: 1, name: 'krish' })
    }
    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setname(event.target.value)
    }
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(name);
    }
    return (
        <div>
            {/* <h3>{counter?.name}</h3> */}
            {/* remove the optional chaining */}
            <h3>{user.name}</h3>
            <button style={{ color: "white" }} onClick={addHandler}>Add</button>
            <div>
                <h2>Create New User</h2>
                <input className={homeStyles.input} type="text" placeholder="user name" onChange={handleUserName} />
                <button onClick={handleSubmit}>submit</button>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Counter
