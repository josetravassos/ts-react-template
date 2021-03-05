import React from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../redux/actions/detailActions'

export interface ICardProps {
    id: any
    children?: any;
    className?: string;
    heading?: string | JSX.Element;
}


const Card = (props: ICardProps) => {
    const classBase = `
    zsg-card
  `;

    //Load Details
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        dispatch(loadDetail(props.id))
    }



    return (
        <div className={classBase} onClick={loadDetailHandler}>
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
