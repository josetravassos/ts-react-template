import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container'
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../lib/animations';

//Redux
import { useSelector } from 'react-redux';


const Detail = () => {
    // const history = useHistory();
    // const url = history.location.pathname;

    // const [collections, setCollections] = useState(SimpleCollection);
    // const [collection, setCollection] = useState<any | null>(null);

    // useEffect(() => {
    //     const currentCollection = collections.filter(
    //         (stateCollection) => stateCollection.url === url
    //     );
    //     setCollection(currentCollection[0]);
    // }, [collections, url]);


    //Data
    const { screen, game, isLoading } = useSelector((state: any) => state.detail)

    return (
        <>
            {!isLoading && (<motion.div variants={pageAnimation} initial="hidden" animate="show">
                <Container>
                    <motion.h1 variants={titleAnimation}>{game.name}</motion.h1>
                    <p>Rating: {game.rating}</p>
                    <div dangerouslySetInnerHTML={{ __html: game.description }} />
                </Container>
            </motion.div>)}

        </>
    )
}

export default Detail
