
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
        {albums.map((item) => (
            <>
           
            <div>fdvv</div>
                <Album
                key={item.album.id}
                //   data={album}
                //   albumid={album.album.id}
                //   artistid={album.artist.id}
      
                />
                </>
              ))}
          
      </Row>

</div>
      )
   }
    }

    export default Gallery
      