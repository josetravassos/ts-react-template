import React from 'react';
import Container from "./Container";
//import ImgPlaceholder from '../images/svg/ic-img-placeholder.svg';

const HeroImage = () => {
    return (
        <div className="zsg-hero__wrapper">
            <Container>
                <div className="zsg-hero__inner">
                    <div className="zsg-hero__inner--text">Learn about the features of the Gamer app</div>
                    {/* <div className="zsg-hero__inner--img"><img className="placeholder" src={ImgPlaceholder} alt="" />
                    </div> */}
                </div>
            </Container>
        </div>
    )
}

export default HeroImage
