import React, {useState} from "react";
import style from "./Selected.module.css"


type ItemType = {
    title: string
    value: any
}

export type SelectedRatingType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const ControledSelected = (props: SelectedRatingType) => {
    const [active, setActive] = useState(false);
    const snowSelect = () => setActive(!active);


    const selectItem = props.items.find(i => i.value === props.value)


    return (
        <div>
            <div className={style.select}>
                <span className={style.main} onClick={snowSelect}>{selectItem && selectItem.title}</span>
                {active &&
                <div className={style.items}>
                    {props.items.map(i => {
                        
                        return <div
                            key={i.value}
                            onClick={() => props.onChange(i.value)}
                        >{i.title}</div>
                     })}
                </div>
                }


            </div>
        </div>
    )


}
