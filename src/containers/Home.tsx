import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from '../components/Card'
import Container from '../components/Container'
import { motion } from 'framer-motion';
import { pageAnimation, cardsAnimation, titleAnimation } from '../lib/animations';

import { SimpleCollection } from '../lib/collection'

const Home = () => {

    const collection = SimpleCollection;

    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <Container>
                <motion.h1 variants={titleAnimation} className="u-mb-30">Top 30</motion.h1>
                <div className="zsg-cards--wrapper">{collection.map(card => {
                    return <motion.div variants={cardsAnimation}>
                        <Card heading={card.title}>
                            <NavLink key={card.title} to={card.url}>link</NavLink>
                        </Card>
                    </motion.div>
                })}</div>
            </Container>
        </motion.div>
    )
}

export default Home