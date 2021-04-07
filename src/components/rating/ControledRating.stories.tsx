import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import ControledRating, {RatingType} from "./ControledRating";


export default {
    title: "Rating Controlled ",
    component: ControledRating,
} //as Meta;

export const EmptyStars = () => <ControledRating value={0} onClick={a => a}/>
export const Rating1 = () => <ControledRating value={1} onClick={a => a}/>
export const Rating2 = () => <ControledRating value={2} onClick={a => a}/>
export const Rating3 = () => <ControledRating value={3} onClick={a => a}/>
export const Rating4 = () => <ControledRating value={4} onClick={a => a}/>
export const Rating5 = () => <ControledRating value={5} onClick={a => a}/>
export const RatingChanding = () => {
    let [rating, setRating] = useState<RatingType>(1)
    return <ControledRating value={rating} onClick={setRating}
    />
}
