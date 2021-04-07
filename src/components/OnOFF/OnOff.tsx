import React, {useState} from 'react';

export type typeProps = {}


export const OnOff = () => {

    let [on, setOn] = useState(false);

    const OnStyle = {
        height: "25px",
        width: "25px",
        border: "1px solid black",
        display: "inline-block",
        margin: "5px",
        padding: "5px",
        backgroundColor: on ? "green" : "white"
    }

    const OffStyle = {
        height: "25px",
        width: "25px",
        border: "1px solid black",
        display: "inline-block",
        margin: "5px",
        padding: "5px",
        backgroundColor: on ? "white" : "red"
    }

    const Lamp = {
        height: "15px",
        width: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={OnStyle} onClick={() => setOn(true)}>On</div>
            <div style={OffStyle} onClick={() => setOn(false)}>Off</div>
            <div style={Lamp}></div>
        </div>
    )
}