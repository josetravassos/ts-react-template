import React from 'react';


const OutterSection = (props: any) => (
    <section className={`zsg-outter-section ${props.className || ''}`}>
        {props.children}
    </section>
);

export default OutterSection;
