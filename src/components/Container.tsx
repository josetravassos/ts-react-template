import React from 'react';


const Container = (props: any) => (
    <div className={`t-container ${props.className || ''}`}>
        {props.children}
    </div>
);

export default Container;
