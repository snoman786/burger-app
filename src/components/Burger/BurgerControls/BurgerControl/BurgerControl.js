import React from 'react';
import classes from './BurgerControl.module.css';
const burgercontrol = (props) => {
    return (
        <div className={classes.BurgerControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.Less}>More</button>
        </div>
        )
};
export default burgercontrol;