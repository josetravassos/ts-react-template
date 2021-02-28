import React from 'react'
import Card from '../components/Card'
import Container from '../components/Container'

const Home = () => {
    return (
        <Container>
            <div className="zsg-cards--wrapper">{[...Array(3)].map(card => {
                return <Card>
                    <p>Card</p>
                </Card>
            })}</div>

        </Container>
    )
}

export default Home