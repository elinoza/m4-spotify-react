
import React from "react";
import {Container,Row} from 'react-bootstrap'




class Albumpage extends React.Component {

    state = {
       
        album: [],
      };
    
      
    
      fetchData = async (albumid) => {
        const url = "https://deezerdevs-deezer.p.rapidapi.com/";
        const response = await fetch(url + "/album/" + albumid,{
            method: "GET",
            headers: {
                "x-rapidapi-key": "9686a97369mshc255201739db656p1f676cjsn793030cdeca7",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        });
    
        const album = await response.json();
        this.setState({ album:album}, () =>
        console.log(this.state.album)
      );
        
      };
    
      componentDidMount() {
       
        this.fetchData(this.props.match.params.id);
     
      }

   
    render(){
        // let id=this.props.match.params.id
        // console.log(id)
 

        return(
            <Container>

            <Row className="mt-4 mb-4">
               fgdfg
                </Row>
             </Container>
        )
    }
}
export default Albumpage