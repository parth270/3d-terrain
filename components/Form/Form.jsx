import React from 'react';
import classes from './Form.module.css';

const Form=(props)=>{

    const submitHandler=(e)=>{
        props.submit(e);
    }

    return(
        <form onSubmit={submitHandler} className={classes.form}  >
            {props.children}
            <button className={classes.btn} >
                Send Message <i className="fas fa-arrow-right"/>
            </button>
        </form>
    );
}

export default Form;