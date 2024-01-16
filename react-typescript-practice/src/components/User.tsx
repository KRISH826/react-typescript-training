type UserProps = {
    name: string,
    age: number,
    isRegister: boolean,
}

// user define types => Object, Array, enum, union, any, custom type 

const User = ({ name, age, isRegister }: UserProps) => {
    return (
        <>
            {isRegister ? <p>Register</p> : <p>Register not</p>}
            <div>{name} {age}</div>
        </>
    )
}

export default User