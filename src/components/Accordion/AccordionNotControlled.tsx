import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";

function AccorfionNotControlled() {

    let [colapsed, setColapsed] = useState(false);


    return (
        <div>
            <AccordionTitle title={"--Menu--"} onClick={() => {
                setColapsed(!colapsed)
            }}/>
            {/*{!colapsed && <AccordionBody items={["1", "2", "3"]}/>}*/}

        </div>
    )
}

export default AccorfionNotControlled;

