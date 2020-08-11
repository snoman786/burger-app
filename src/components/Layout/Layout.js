import React from 'react';

import classes from './Layout.module.css';

import Wrap from '../../hoc/Wrap';
const layout = (props) => (
    <Wrap>
        <div>toolbar,sidedrawer,backdrop</div>
        <main className={classes.Content}>
        {props.children}
        </main>
    </Wrap>
)

export default layout;