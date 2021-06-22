import React, {useEffect, useState} from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
       const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
           clearInterval(intervalId);
        }
    }, []);

    const zeroTime = (num: number) => {
        return num < 10 ? "0" + num : num
    }

    // const zeroSeconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

    return (
        <div>
            <span>{zeroTime(date.getHours())}</span>
            :
            <span>{zeroTime(date.getMinutes())}</span>
            :
            <span>{zeroTime(date.getSeconds())}</span>
        </div>
    )
}