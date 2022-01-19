import React, { useEffect, useState } from 'react'
import './card.css'
import { Card, Row, Col, Container, Navbar, Nav, NavDropdown,Button } from "react-bootstrap";
const data = {
    'cardData': [
        {
            "cardName": "sales",
            "cardLink": "https://google.com",
            "color": "primary"
        },
        {
            "cardName": "test",
            "cardLink": "https://google.com",
            "color": "secondary"
        }
    ]
}
var sectionStyle = {
    backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-8I12GBi0riANZXnVWHim9UE_3E74u6tVWrEP_jHhuVO3gQn6wzouT_okngrQUys0-E&usqp=CAU'
 }
export default function Dynamic() {

    const [playerData, setPlayerData] = useState(data.cardData);

    return (
        <Container >
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div >
                <div>
                <Row>
                    {playerData.map((playerData, k) => (
                        <Col key={k} xs={12} md={4} lg={3}>
                            <Card border="success" bg={playerData.color} >
                                <Card.Header>{playerData.cardName}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Secondary Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary" href={playerData.cardLink} target="_blank">Visit</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                </div>
            </div>

        </Container>

    )
}