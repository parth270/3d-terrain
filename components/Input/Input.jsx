import React from 'react';

const Input=(props)=>{

    const changeHandler=(e)=>{
        props.change(e);
    }

    return(
        <>
        {(props.type === "textarea")?<textarea placeholder={props.name} onChange={changeHandler} >{props.children}</textarea> :<input placeholder={props.name} type={props?.type} onChange={changeHandler} />}
    </>
    );
}

export default Input;