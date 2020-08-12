import React from 'react';
import Wrap from '../../../hoc/Wrap';

const orderSummary = (props) => {
    const IngredientsSummary =  Object.keys(props.ingredients)
    .map(igKey =>{
        return <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}
            </span> :  {props.ingredients[igKey]}
           </li>
    })
return(
    <Wrap>
        <h3>You Order  </h3>
        <p>Burger with Following Ingredients : </p>

        <ui>
            {IngredientsSummary}
        </ui>
        <p>Continue to Checkout ?</p>
    </Wrap>
);


}
export default orderSummary;