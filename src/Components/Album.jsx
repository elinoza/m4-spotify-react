
import React from "react";
import {Col,Card } from 'react-bootstrap'
import { withRouter} from "react-router-dom";


class Album extends React.Component {
    render(){
        const{data}=this.props

        return(


        <Col xs={12} md={4} lg={2} className="px-2">
            <Card className=" bg-transparent border-0 text-center body" 
            onClick={() =>this.props.history.push(`/albumpage/${data.album.id}`)
        } >
                <Card.Img variant="top" src={data.album.cover} />
                <Card.Body>
                    <Card.Title>{data.title_short}</Card.Title>
                    <Card.Text className="text-muted text-truncate text-overflow">
                    {data.artist.name}
                    </Card.Text>
                    
                </Card.Body>
                </Card> 
            </Col>
        )
    }
}
export default withRouter(Album)