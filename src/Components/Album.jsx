
import React from "react";
import {Col,Card } from 'react-bootstrap'


class Album extends React.Component {
    render(){

        return(


<Col xs={"12"} md={"4"} lg={"2"} className="px-2">
            <Card className=" bg-transparent border-0 text-center" >
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    
                </Card.Body>
                </Card> 
            </Col>
        )
    }
}
export default Album