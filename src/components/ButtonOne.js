import React from 'react';
import stylesWrapper from './HOC/stylesWrapper';


const ButtonOne = (props) => {
    return (
             <button style={props.styles}>Click me</button>         
    )
}

export default stylesWrapper(ButtonOne);