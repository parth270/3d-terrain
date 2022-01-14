import React from 'react';
import classes from './Form.module.css';
import Link from 'next/link';

const Form=(props)=>{

    const submitHandler=(e)=>{
        props.submit(e);
    }

    return(
        <form onSubmit={submitHandler} className={classes.form}  >
            {props.children}
            <button className={classes.btn} >
               <Link href="/contact/thankyou" >Send Message</Link>  <i className="fas fa-arrow-right"/>
            </button>
        </form>
    );
}

export default Form;