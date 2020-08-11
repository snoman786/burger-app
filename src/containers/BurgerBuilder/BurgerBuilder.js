import React, { Component } from 'react';
import Wrap from '../../hoc/Wrap';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Wrap>
               <Burger/>
                <div>Burger Control</div>
            </Wrap>
            );
    }
}

export default BurgerBuilder;