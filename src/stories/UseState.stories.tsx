import React, {useMemo, useState} from "react";


export default {
    title: "UseState"
}

const generateData = () => {
    console.log("generateData");
    return 11112321424;
}

export const Example = () => {
    console.log("YO");
    let [counter, setCounter] = useState(generateData);

    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}

        </div>

    )
}