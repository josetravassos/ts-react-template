import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container'
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../lib/animations';

import { SimpleCollection } from '../lib/collection';

// export interface ICollectionData {
//     url: string;
//     category: string;
//     title: string;
//     foto: string;
//     description: string;
//     prevState: null
// }

const About = () => {
    const history = useHistory();
    const url = history.location.pathname;

    const [collections, setCollections] = useState(SimpleCollection);
    const [collection, setCollection] = useState<any | null>(null);

    useEffect(() => {
        const currentCollection = collections.filter(
            (stateCollection) => stateCollection.url === url
        );
        setCollection(currentCollection[0]);
    }, [collections, url]);

    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <Container>
                {collection && <div className="zsg-inner-section">
                    <motion.h1 variants={titleAnimation}>{collection.title}</motion.h1>
                    <div dangerouslySetInnerHTML={{ __html: collection.description }} />
                </div>}

            </Container>
        </motion.div>
    )
}



export default About
