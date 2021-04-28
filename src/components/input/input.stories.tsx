import {ChangeEvent, useRef, useState} from "react";


export default {
    title: "input",
}


export const InputNotControlled = () => <input/>

export const InputControlled = () => {
    let [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        setValue(newValue)
    }
    return <><input onChange={onChange}/> - {value} </>
}


export const GetValueInputControlled = () => {
    let [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value} </>
}


export const ControlledCheckBox = () => {
    let [check, setCheck] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newCheck = e.currentTarget.checked
        setCheck(newCheck);
    }
    return <input type={"checkbox"} checked={check} onChange={onChange}/>
}

export const ControlledSelect = () => {
    let [select, setSelect] = useState<string | undefined>(undefined);
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newSelect = e.currentTarget.value
        setSelect(newSelect);
    }
    return <select value={select} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}