import React from "react";
import {ItemsType} from "./AccordionControlled";

type BodyType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

export const AccordionBody = (props: BodyType) => {
    return (
        <ul>
                {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}