import React from 'react'
import { IUser } from '../models/user.model'

const Users = (props: IUser) => {
    return (
        <>
            <div>Name: {props?.firstName} {props?.lastName}</div>
            <div>Email: {props?.email}</div>
        </>
    )
}

export default Users