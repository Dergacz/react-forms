import React from "react";
import {AccordionBody} from "./AccordionBody";

export type ItemsType = {
    title: string
    value: any
}

export type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemsType[]
    onClick: (value: any) => void
}

export function AccordionControlled(props: AccordionType) {
    return (
        <div>
            <h3 onClick={() => props.onChange()}>--{props.titleValue}--</h3>
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

