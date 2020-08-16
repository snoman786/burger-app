import React from 'react';
import Toobar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import Wrap from '../../hoc/Wrap';
import sideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = (props) => (
    <Wrap>
        {/*<div>toolbar,sidedrawer,backdrop</div>  */}
        <Toobar/>
        <SideDrawer/>
        <main className={classes.Content}>
        {props.children}
        </main>
    </Wrap>
)

export default layout;