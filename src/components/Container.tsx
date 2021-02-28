import React from 'react';


const Container = (props: any) => (
    <div className={`zsg-container ${props.className || ''}`}>
        {props.children}
    </div>
);

export default Container;
