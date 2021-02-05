
import React from "react";
import './album-styles.css';
import {Container,Row,Col,Card,ListGroup} from 'react-bootstrap'




class Albumpage extends React.Component {

    state = {
       
        album: {},
        tracks:[]
      };
    
      
    
      fetchData = async (albumid) => {
        const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
        const response = await fetch(url + albumid,{
            method: "GET",
            headers: {
                "x-rapidapi-key": "9686a97369mshc255201739db656p1f676cjsn793030cdeca7",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        });
    
        const album = await response.json();
        this.setState({ album:album,tracks:album.tracks.data}, () =>
        console.log(this.state.album, this.state.tracks)
      );
        
      };
    
      componentDidMount() {
       
        this.fetchData(this.props.match.params.id);
     
      }

   
    render(){
        // let id=this.props.match.params.id
      
 

        return(
            <Container>
                    <Row>
                     <Col md={3} lg={2}>
                            <div>space</div>
                        </Col>
                        <Col md={9} lg={10}>
                        <Row className="mt-4 mb-4">
                        <Col md={5} >
                        <Card className=" bg-transparent border-0 text-center body"  >
                                <Card.Img variant="top" src={this.state.album.cover} />
                                <Card.Body>
                                    <Card.Title>{this.state.album.title}</Card.Title>
                                    <Card.Text className="text-muted text-truncate text-overflow">
                                 
                                    </Card.Text>
                    
                        </Card.Body>
                        </Card> 


                        </Col>
                        <Col md={6}  >

                        <div className="tracklist pr-3 p-1 " style={{borderBottom:"1px solid gray" }}>

                        {this.state.tracks.map((song) => (
                
            
                        <div className="d-flex">
                        <i class="align-self-start fas fa-music mr-2"></i>

                        <div className="d-inline align-self-start">
                        <p>{song.title}</p>
                        <p className="subtitle">{song.artist.name}</p>
                        </div>
                        <p className="d-inline subtitle ml-auto">{song.duration}</p></div>
                        ))}
                        
                        </div>
                        </Col>
                        </Row>
                        
                        </Col>
                </Row>

            
             </Container>
        )
    }
}
export default Albumpage