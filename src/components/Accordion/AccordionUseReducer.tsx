import React, {useReducer} from "react";
import {AccordionType} from "./AccordionControlled";
import {AccordionTitle} from "./AccordionTitle";

type ActionType = {
    type: string
}


export const reducer = (state: boolean, action: ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED"){
        return !state;
    }
    return state;
}

export const AccordionUseReducer = (props: AccordionType) => {
    let [collapsed, dispatch] = useReducer(reducer, false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: "TOGGLE-COLLAPSED"})}
            }/>
            {!collapsed && <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>}
        </div>
    )
}