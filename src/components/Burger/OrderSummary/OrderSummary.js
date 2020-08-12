import React from 'react';
import Wrap from '../../../hoc/Wrap';
import Button from '../../UI/Button/Button';

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
<p><strong>Total Price : {props.price}</strong></p>
        <p>Continue to Checkout ?</p>
        <Button btnType='Danger' clicked ={props.orderCancel} >Cancel</Button>
        <Button btnType='Success' clicked ={props.orderContinue} >Continue</Button>
    </Wrap>
);


}
export default orderSummary;