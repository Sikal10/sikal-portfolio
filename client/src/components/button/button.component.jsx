import React from "react";

import './button.styles.scss'

const Button = (props) => {
    return (
        <div>
            <a target={props.target} className={props.classProps} href={props.url}>{props.children}</a>
        </div>
    )
};

export default Button;