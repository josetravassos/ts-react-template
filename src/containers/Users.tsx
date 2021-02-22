import React from 'react'
import { IUser } from '../models/user.model'
import Api from '../redux/api'

const Users = (props: IUser) => {
    return (
        <>
            <div>Name: {props?.name}</div>
            <div>Email: {props?.email}</div>
            <Api />
        </>
    )
}

export default Users