import React, {useState} from "react";
import {AccordionControlled} from "./AccordionControlled";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    component: AccordionControlled
}

const callback = action("click Menu");
const onCkickli = action("click li");

const AccordionOnRM = React.memo(AccordionControlled);

export const AccordionOn = () => {
    return (
        <AccordionOnRM titleValue={"Menu"}
                       collapsed={true}
                       onChange={callback}
                       items={[{title: "1", value: 1},
                           {title: "2", value: 2},
                           {title: "3", value: 3}
                       ]}
                       onClick={onCkickli}/>
    )
}

const AccordionOffRM = React.memo(AccordionControlled);

export const AccordionOff = () => {
    return <AccordionOffRM titleValue={"Menu"}
                                collapsed={false}
                                onChange={callback}
                                items={[]}
                                onClick={onCkickli}/>
}


const AccordionChangeRM = React.memo(AccordionControlled);

export const AccordionChange = () => {
    const [value, setValue] = useState(true);
    return <AccordionChangeRM titleValue={"Menu"}
                                collapsed={value}
                                onChange={() => setValue(!value)}
                                items={[{title: "1", value: 1},
                                    {title: "2", value: 2},
                                    {title: "3", value: 3}
                                ]}
                                onClick={(id) => {
                                    alert(`cklick ${id}`)
                                }}/>
}

