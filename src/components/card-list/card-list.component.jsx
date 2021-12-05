import React from "react";
import {Col,Row, Card} from 'react-bootstrap'
import './card-list.styles.css'

export const CardList = (props) => 
{
    return (
        <Row xs={4}>
        {
            props.monsters.map((value,key) => 
            {
                return (
                    <Col className="card-space">
                        <Card className="card-container" key={key}>
                            <Card.Img src={`https://robohash.org/${key}?set=set2&size=180x180`}/>
                            <Card.Header>{value.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{value.email}</Card.Title>
                            </Card.Body>  
                        </Card>
                    </Col>

                )
            })
        }
        </Row>
    )
}