import React from 'react';
//import { ColorDefinition, colorDefinitionToClassName, ColorPalette } from '../../lib/models/theming.model';


// export interface ICardProps {
//   backgroundColor?: ColorDefinition;
//   borderColor?: ColorDefinition;
//   children?: any;
//   className?: string;
//   popover?: JSX.Element;
//   href?: string;
//   onClick?: () => void;
//   heading?: string | JSX.Element;
// }

// TODO: For accessibility's sake, automatically find the nearest heading and make it match or go below. Maybe.
const Card = (props: any) => {
    const classBase = `
    zsg-card
  `;

    //   if (!!props.onClick) {
    //     return (
    //       <button className={classBase + ' xsg-card--interactive'}>
    //         {props.heading && (
    //           <h2 className="xsg-card__heading">
    //             {props.heading}
    //             {!!props.popover && <span className="u-ml-xxsm"><Popover header={props.heading} position={Position.Top}>{props.popover}</Popover></span>}
    //           </h2>
    //         )}
    //         {props.children}
    //       </button>
    //     );
    //   }

    return (
        <div className={classBase}>
            {props.children}
        </div>
    );
}

export default Card;
