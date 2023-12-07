import React from "react"
import Card from "react-bootstrap/Card"
import NihalChahal from './nihalchahal.jpeg'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={NihalChahal} />
                <Card.Body>
                    <Card.Title>Nihal Chahal</Card.Title>
                    <Card.Text>I am a human who is mostly interested in learning in all kinds of different technologies!</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard