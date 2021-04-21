import React, {useState} from "react";


export default {
    title: "React.memo demo"
}

const NewMessageCount = (props: { count: number }) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

const SecretUsers = (props: { users: string[] }) => {
    console.log("sdfgdfg")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(SecretUsers);

export const Example = () => {
    let [counter, setCounter] = useState(0);
    let [users, setUsers] = useState(["Vasia", "Petia"]);

    const addUser = () => {
        const newUser = [...users, "Igorek " + new Date().getTime()];
        setUsers(newUser);
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add Igorek</button>
            <NewMessageCount count={counter}/>
            <Users users={users}/>
        </div>

    )
}