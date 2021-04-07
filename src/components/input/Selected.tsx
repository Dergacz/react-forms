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
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const showSelect = () => setActive(!active);
    const clickSelectElement = (value: any) => {
        props.onChange(value);
        showSelect();
    }
    const selectItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElement);



    return (
        <div>
            <div className={style.select}>
                <span className={style.main} onClick={showSelect}>{selectItem && selectItem.title}</span>
                {active &&
                <div className={style.items}>
                    {props.items.map(i => {
                        
                        return <div
                            className={style.item + " " + (hoveredItem === i ? style.selected : "")}
                            key={i.value}
                            onClick={() =>{
                                clickSelectElement(i.value)
                            }}
                            onMouseEnter={() => setHoveredElement(i.value)}
                        >{i.title}</div>
                     })}
                </div>
                }


            </div>
        </div>
    )


}
