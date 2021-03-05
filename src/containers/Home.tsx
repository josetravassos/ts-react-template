import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../redux/actions/gamesActions'
import { NavLink } from 'react-router-dom';
import Card from '../components/Card'
import Container from '../components/Container'
import { motion } from 'framer-motion';
import { pageAnimation, cardsAnimation, titleAnimation } from '../lib/animations';

import { SimpleCollection } from '../lib/collection'

const Home = () => {

    const collection = SimpleCollection;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])

    const { popular, newGames, upcoming } = useSelector((state: any) => state.games);

    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <Container>
                <motion.h1 variants={titleAnimation} className="u-mb-30">Top 30</motion.h1>

                <div className="zsg-cards--wrapper">{popular.map((data: any) => {
                    return <motion.div variants={cardsAnimation} key={data.id}>
                        <Card id={data.id} heading={data.name} >
                        </Card>
                    </motion.div>
                })}</div>

            </Container>
        </motion.div>
    )
}

export default Home