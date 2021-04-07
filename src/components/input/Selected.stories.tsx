import React, {useState} from "react";
import {ControledSelected} from "./Selected";
import {action} from "@storybook/addon-actions";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: "Selected",
    component: ControledSelected,
} //as Meta;

export const WithValue = () => {
    const [value, setValue] = useState("2")
    return (
        <ControledSelected value={value}
                           onChange={setValue}
                           items={[
                               {value: "1", title: "Minsk"},
                               {value: "2", title: "Moscow"},
                               {value: "3", title: "Kiev"},
                           ]}
        />
    )
}


export const WithoutValue = () => {
    const [value, setValue] = useState()
    return (
        <ControledSelected
            onChange={setValue}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"},
            ]}
        />
    )
}
