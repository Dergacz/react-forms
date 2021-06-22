import React, {useEffect, useMemo, useState} from "react";


export default {
    title: "UseTime"
}


export const SetTimeOutTime = () => {
    const [counter, setCounter] = useState(1);
    console.log("SetTimeOutExample");

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setCounter(date.getTime);
        }, 1000);
    });

    return (
        <div>
            Hello, {counter}
            <button>counter+</button>
        </div>
    )
}