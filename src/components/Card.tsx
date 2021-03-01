import React from 'react';

export interface ICardProps {
    children?: any;
    className?: string;
    href?: string;
    onClick?: () => void;
    heading?: string | JSX.Element;
}


const Card = (props: ICardProps) => {
    const classBase = `
    zsg-card
  `;

    if (!!props.onClick) {
        return (
            <button className={classBase + ' zsg-card--interactive'}>
                {props.heading && (
                    <h2 className="zsg-card__heading">
                        {props.heading}
                    </h2>
                )}
                {props.children}
            </button>
        );
    }

    return (
        <div className={classBase}>
            {props.heading && (
                <h2 className="zsg-card__heading">
                    {props.heading}
                </h2>
            )}
            {props.children}
        </div>
    );
}

export default Card;
