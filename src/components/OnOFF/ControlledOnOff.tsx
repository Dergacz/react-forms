import React, {useState} from 'react';

export type typeProps = {
    on: boolean
    onChange: (on: boolean) => void
}


export const ControlledOnOff = (props: typeProps) => {


    const OnStyle = {
        height: "25px",
        width: "25px",
        border: "1px solid black",
        display: "inline-block",
        margin: "5px",
        padding: "5px",
        backgroundColor: props.on ? "green" : "white"
    }

    const OffStyle = {
        height: "25px",
        width: "25px",
        border: "1px solid black",
        display: "inline-block",
        margin: "5px",
        padding: "5px",
        backgroundColor: props.on  ? "white" : "red"
    }

    const Lamp = {
        height: "15px",
        width: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on  ? "green" : "red"
    }

    return (
        <div>
            <div style={OnStyle} onClick={() => props.onChange(true)}>On</div>
            <div style={OffStyle} onClick={() => props.onChange (false)}>Off</div>
            <div style={Lamp}></div>
        </div>
    )
}