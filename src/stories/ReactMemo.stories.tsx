import React, {useMemo, useState} from "react";


export default {
    title: "ReactMemo"
}

export const HardNumbers = () => {
    const [a, setA] = useState<number>(1);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
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
    console.log("YO");
    let [counter, setCounter] = useState(0);
    let [users, setUsers] = useState(["Vasia", "Petia", "Kosti"]);

    const addUser = () => {
        const newUser = [...users, "Igoreka " + new Date().getTime()];
        setUsers(newUser);
    }

    const newArray = useMemo(() => {
        const newUsers = users.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newUsers;
    }, [users]);
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </div>

    )
}