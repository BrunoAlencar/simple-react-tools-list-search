import React from 'react';
import './List.css';
import {  Row, Col, Card } from 'react-bootstrap'
function List() {
    return (
        <>
            <Row>
                <Col lg="12">
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <Card>
                        <Card.Body>asdasdasd e text within a card  y.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default List;