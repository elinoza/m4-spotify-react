
import React from "react";
import {Row } from 'react-bootstrap'
import Album from './Album.jsx'


class Gallery extends React.Component {
    render(){
        const { title, albums } = this.props;
     

        return(
            <div className="body">

        <h1> {title} </h1>
        <Row>
       
            <>
           
            {albums.slice(0, 6).map((album) => (
                <Album

                key={album.album.id}
           
                data={album}
               albumid={album.album.id}
                artistid={album.artist.id}
      
                />
            ))}
                </>
            
          
      </Row>

</div>
      )
   }
    }

    export default Gallery
      