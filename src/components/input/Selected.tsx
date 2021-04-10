import React, {KeyboardEventHandler, useEffect, useState} from "react";
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

    useEffect(() => {
        setHoveredElement(props.value);

    }, [props.value])

    const onKeyUp = (e: any) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }


    return (
        <div>
            <div className={style.select}
                 onKeyUp={onKeyUp}
                 tabIndex={0}
            >
                <span className={style.main} onClick={showSelect}>{selectItem && selectItem.title}</span>
                {active &&
                <div className={style.items}>
                    {props.items.map(i => {

                        return <div

                            className={style.item + " " + (hoveredItem === i ? style.selected : "")}
                            key={i.value}
                            onClick={() => {
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
