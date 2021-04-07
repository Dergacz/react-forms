import React, {useState} from "react";
import ControlledStar from "../Star/ControledStar";


export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

export type ControledRatingType = {
    value: RatingType
    onClick: (value: RatingType) => void
}

let ControledRating = (props: ControledRatingType) => {

    return (
        <div>
            <ControlledStar selected={props.value > 0} onClick={() => props.onClick(1)}/>
            <ControlledStar selected={props.value > 1} onClick={() => props.onClick(2)}/>
            <ControlledStar selected={props.value > 2} onClick={() => props.onClick(3)}/>
            <ControlledStar selected={props.value > 3} onClick={() => props.onClick(4)}/>
            <ControlledStar selected={props.value > 4} onClick={() => props.onClick(5)}/>
        </div>
    )


}

export default ControledRating;