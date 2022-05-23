import React from 'react';

const CommonButton = ({children}) => {
    return (
        <button className="btn  uppercase text-white font-bold bg-primary">{children}</button>
    );
};

export default CommonButton;