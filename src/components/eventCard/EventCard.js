import React from "react";
import { Card, Button } from "react-bootstrap";
const EventCard = () => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
            />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    I offer quality services with reasonable prices
                </Card.Text>
                <Button variant="primary">Check My Work</Button>
                <Button variant="primary">Check My Work</Button>
            </Card.Body>
        </Card>
    );
};

export default EventCard;
