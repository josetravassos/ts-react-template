import React from 'react'
import { IUser } from '../lib/models/user.model'
//import Api from '../redux/api'
import Container from '../components/Container'
import { motion } from 'framer-motion';
import { pageAnimation, cardsAnimation } from '../lib/animations';

const Users = (props: IUser) => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <Container>
            </Container>
        </motion.div>
    )
}

export default Users