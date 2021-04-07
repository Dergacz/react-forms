import React from "react";

type PropsType = {
    selected: boolean
    onClick: () => void
}


const ControlledStar = (props: PropsType) => {

    return (
        <span onClick={() => {props.onClick()}}>{props.selected ? <b>star </b> : "star "}</span>

    )

}
export default ControlledStar;