import React, {useState} from "react";
import "./App.css";
import ControledRating, {RatingType} from "./components/rating/ControledRating";
import {ControlledOnOff} from "./components/OnOFF/ControlledOnOff";
import AccorfionNotControlled from "./components/Accordion/AccordionNotControlled";
import Rating from "./components/rating/Rating";
import {OnOff} from "./components/OnOFF/OnOff";
import {AccordionControlled} from "./components/Accordion/AccordionControlled";
import {ControledSelected} from "./components/input/Selected";
import {Clock} from "./components/Clock/Clock";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [controlOn, setControlOn] = useState<boolean>(false);
    return (
        <div>
            <AccorfionNotControlled/>
            <hr/>
            <AccordionControlled collapsed={accordionCollapsed}
                                 titleValue={"Menu"}
                                 onChange={() => {
                                     setAccordionCollapsed(!accordionCollapsed)
                                 }}
                                 items={[{title: "1", value: 1},
                                     {title: "2", value: 2},
                                     {title: "3", value: 3}]}
                                 onClick={a=>a}
            />
            <hr/>
            <Rating/>
            <hr/>
            <ControledRating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <OnOff/>
            <hr/>
            <ControlledOnOff on={controlOn} onChange={setControlOn}/>
            <hr/>
            {/*<ControledSelected value={} onChange={} items={}*/}
            <Clock/>


        </div>
    );
}

export default App;
