import React, {useState} from "react";
import {ControlledOnOff} from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: "OnOff Controlled ",
    component: ControlledOnOff,
} //as Meta;

const callback = action("on or off clicked");
export const OnMode = () => <ControlledOnOff on={true} onChange={callback}/>
export const OffMode = () => <ControlledOnOff on={false} onChange={callback}/>

export const OnOffChanding = () => {
    let [value, setValue] = useState<boolean>(false)

    return <ControlledOnOff on={value} onChange={setValue}/>
}
