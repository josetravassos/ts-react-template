import React from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../redux/actions/detailActions'
import { Link } from 'react-router-dom';


import { smallImage } from "../helpers/image-resizer";

export interface ICardProps {
    id: any
    children?: any;
    className?: string;
    heading?: string | JSX.Element;
    image?: string
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
            <Link to={`/detail/${props.id}`}>
                {props.heading && (
                    <h2 className="zsg-card__heading">
                        {props.heading}
                    </h2>
                )}
                {props.children}
                <img src={smallImage(props.image, 640)} alt="" />
            </Link>
        </div>
    );
}

export default Card;
