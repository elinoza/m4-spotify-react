import React from "react";
import {Container} from 'react-bootstrap'
import Gallery from './Gallery.jsx'


class Home extends React.Component {

    state={
        jazz:[],
        classical:[],
        rap:[],
        selectedid:null,
        loading:true,
        error:false,
        
    }
url="https://deezerdevs-deezer.p.rapidapi.com/"
   componentDidMount= () => {
        
        Promise.all([
            fetch(this.url+ "search?q=jazz", {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "9686a97369mshc255201739db656p1f676cjsn793030cdeca7",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            })
            .then((response) => response.json())
            .then((responseObject) => {
              this.setState({ jazz: responseObject.data}, () =>
                console.log(this.state.jazz)
              );
            }),
            fetch(this.url + "search?q=classical", {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "9686a97369mshc255201739db656p1f676cjsn793030cdeca7",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            })
                .then((response) => response.json())
                .then((responseObject) => {
                  this.setState({ classical: responseObject.data}, () =>
                    console.log(this.state.classical)
                  );
                }),
                fetch(this.url+ "search?q=rap", {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key": "9686a97369mshc255201739db656p1f676cjsn793030cdeca7",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                    }
                })
                    .then((response) => response.json())
                    .then((responseObject) => {
                      this.setState({ rap: responseObject.data}, () =>
                        console.log(this.state.rap)
                      );
                    }),



          
        ])
          .then(() => this.setState({ loading: false }))
          .catch((err) => {
            this.setState({ error: true });
            console.log("An error has occurred:", err);
          });
      };
        
    render(){


        return(
            <Container>

            <Gallery title="jazz" albums={this.state.jazz} />
            <Gallery title="classical"  albums={this.state.classical}/>
            <Gallery title="rap" albums={this.state.rap}/>
            </Container>
        )
    }
}
export default Home