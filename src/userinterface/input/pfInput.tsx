import React from 'react';
import cl from './pfInput.module.css'

const PfInput = (props: any) => {
    return (
        <div>
            <input className={cl.pfInput} type="text" {...props}/>
        </div>
    );
};

export default PfInput;