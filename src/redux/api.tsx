import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../models/user.model'

const Api = () => {
    const [totalUsers, setTotalUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setTotalUsers(response.data);
            });
    }, []);

    return (
        <div>
            <ul>
                {totalUsers.map((props: IUser) => {
                    return <li key={props.name}>{props.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Api;