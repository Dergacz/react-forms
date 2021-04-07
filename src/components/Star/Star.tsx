import React, {useState} from "react";

type PropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (number : 1 | 2 | 3 | 4 | 5) => void
}


const Star = (props: PropsType) => {

    return (
        <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star </b> : "star "}</span>

    )

}
export default Star;