
import React from "react";

export type titleProps = {
    title: string
    onClick: () => void
}
export function AccordionTitle(props: titleProps){
    return(
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}