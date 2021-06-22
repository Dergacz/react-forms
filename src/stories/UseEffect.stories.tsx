import React, {useEffect, useMemo, useState} from "react";


export default {
    title: "UseEffect"
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("SimpleExample");

    useEffect(() => {
        console.log("UseEffect every render");
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log("UseEffect only first render");
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("UseEffect only first render and every counter change");
        document.title = counter.toString();
    }, [counter]);

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </div>
    )
}


export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("SetTimeOutExample");

    useEffect(() => {
        setInterval(() => {
            console.log("set timeout");
            setCounter(state => state + 1);
        }, 1000);
    }, []);

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </div>
    )
}