import React from "react";

type ElementsType = {
    selected: boolean
}

function AccordionElements(props: ElementsType) {

    if (props.selected === true) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    } else {
        return <ul></ul>
    }

}

export default AccordionElements;