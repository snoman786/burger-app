import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
return(

    props.canShow ? <div className = {classes.Backdrop} onClick = {props.clicked}></div> : null 
)

}

export default backdrop ;
