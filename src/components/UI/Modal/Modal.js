import React from 'react';
import Wrap from '../../../hoc/Wrap';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const modal = (props) =>{

    return(
        <Wrap>
            <Backdrop canShow={props.canShow} clicked = {props.modalClosed} />
            <div className={classes.Modal} style={{
                transform: props.canShow ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.canShow ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Wrap>
    );
    
};

export default modal ;