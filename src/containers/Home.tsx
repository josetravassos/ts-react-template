import React from 'react'
import Card from '../components/Card'
import Container from '../components/Container'
import { motion } from 'framer-motion';
import { pageAnimation, cardsAnimation } from '../lib/animations';

const Home = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <Container>
                <div className="zsg-cards--wrapper">{[...Array(3)].map(card => {
                    return <motion.div variants={cardsAnimation}><Card>
                        <p>Card</p>
                    </Card>
                    </motion.div>
                })}</div>
            </Container>
        </motion.div>
    )
}

export default Home