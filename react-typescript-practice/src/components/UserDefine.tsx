/** @format */

import Button from "./Button";

type UserDefineTypes = {
    lang: string[];
    user: {
        name: string;
        age: number;
        isregister: boolean;
        lang: string[];
    };
    users: {
        id: number;
        name: string;
        age: number;
        email: string;
    }[];
};

const UserDefine = ({ lang, user, users }: UserDefineTypes) => {
    return (
        <>
            <div>
                {lang.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>{user.name}</p>
                <p>{user.age}</p>
            </div>
            <div>
                {users.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
            <Button btnStyle={{ color: 'white', width: '120px' }}>label</Button>
        </>
    );
};

export default UserDefine;
