import React from 'react';


const TopNavbar = (props: any) => (
    <div className="zsg-navbar">
        <div className="zsg-navbar__logo">Logo</div>
        <div className="zsg-navbar__menu">{props.children}</div>
        <div className="zsg-navbar__right">R</div>
    </div>
);

export default TopNavbar;
