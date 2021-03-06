import React from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildercontrols = (props) => {
    console.log(props.disabled);
    return (
        <div className={classes.BurgerControls}>
            <p> Burger Price : { props.price.toFixed(2)}</p>
            {controls.map(ctrl =>
            (
                    <BurgerControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.ingredientsAdded(ctrl.type)}
                        removed={() => props.ingredientsRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
            )

            )}
            <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick= {props.ordered}
            >ORDER NOW</button>
        </div>
        )
}
export default buildercontrols;