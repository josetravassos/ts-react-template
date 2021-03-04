import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../lib/models/user.model'
import { motion } from 'framer-motion';
import { titleAnimation } from '../lib/animations';

const Api = () => {
    const [totalUsers, setTotalUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setTotalUsers(response.data);
            });
    }, []);

    return (
        <ul>
            {totalUsers.map((props: IUser) => {
                return <motion.li key={props.name} variants={titleAnimation} initial="hidden" animate="show">{props.name}</motion.li>
            })}
        </ul>
    )
}

export default Api;