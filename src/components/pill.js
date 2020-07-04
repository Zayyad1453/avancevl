import React from 'react';

const Pill = (props) => {
    return (
        <button 
        className={`pill bgrad mr-2 ${props.isSubmit && 'submit-btn'} ${props.isButton && 'px-3 py-2'}`}
        >
            {props.label}
        </button>
    );
}


export default Pill;
