import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    // not clear
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
               return <BurgerIngredients key={igkey + i} type={igkey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding Ingredients </p>
    }
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {/* 
             *  <BurgerIngredients type="cheese" />
             *  <BurgerIngredients type="meat" />
             */}
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
            
        </div>
        )
}

export default burger;