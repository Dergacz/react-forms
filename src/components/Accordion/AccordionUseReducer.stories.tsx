import React from "react";
import {AccordionUseReducer} from "./AccordionUseReducer";
import {action} from "@storybook/addon-actions";

export default {
    title: "AccordionUseReducer",
    component: AccordionUseReducer
}

export const AccordionUse = () => <AccordionUseReducer titleValue={"Menu"} collapsed={false} onChange={action("Hoba")} items={[
]} onClick={action("Hoba")}/>