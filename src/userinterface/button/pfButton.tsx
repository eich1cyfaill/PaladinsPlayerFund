import React from 'react';
import cl from "./pfButton.module.sass"

const PfButton = (props: any) => {

    return (
        <div className={cl.button_container}>
            <span className={cl.svg_class}>{props.children}</span>
            <button className={`${cl.pfButton} ${props.active ? cl.pfButton_active : 'default'}`} {...props}>{props.children}</button>
        </div>
    );
};

export default PfButton;