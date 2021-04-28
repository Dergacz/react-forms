import React from "react";
import {AccordionUseReducer} from "./AccordionUseReducer";
import {action} from "@storybook/addon-actions";

export default {
    title: "AccordionUseReducer",
    component: AccordionUseReducer
}
const AccordionUseRM = React.memo(AccordionUseReducer);

export const AccordionUse = () => {
    return (
        <AccordionUseRM
            titleValue={"Menu"}
            collapsed={false}
            onChange={action("Hoba")}
            items={[]}
            onClick={action("Hoba")}
        />
    )
}
