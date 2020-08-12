import React from 'react';
import Toobar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

import Wrap from '../../hoc/Wrap';
const layout = (props) => (
    <Wrap>
        {/*<div>toolbar,sidedrawer,backdrop</div>  */}
        <Toobar/>
        <main className={classes.Content}>
        {props.children}
        </main>
    </Wrap>
)

export default layout;