import React from 'react';
import UserPlaceholder from '../images/svg/ic-user-placeholder.svg';
import LogoPlaceholder from '../images/svg/ic-logo-placeholder.svg';

const TopNavbar = (props: any) => (
    <div className="zsg-navbar">
        <div className="zsg-navbar__logo"><img className="icon-placeholder" src={LogoPlaceholder} alt="" /></div>
        <div className="zsg-navbar__menu">{props.children}</div>
        <div className="zsg-navbar__user"><img className="icon-placeholder" src={UserPlaceholder} alt="" /></div>
    </div>
);

export default TopNavbar;
