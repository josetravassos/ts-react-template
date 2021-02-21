import React from 'react';


const Section = (props: any) => (
    <section className={`t-section ${props.className || ''}`}>
        {props.children}
    </section>
);

export default Section;
