import React, { Component }from "react";
import { withRouter,Link } from "react-router-dom";
import {Navbar} from "react-bootstrap"

class SideBar extends React.Component {
    render(){
        return(
            <>

            <Navbar style={{backgroundColor:"black", flexFlow:"Column", width:"150px",position:"fixed", top:"0",bottom:"0"}}>
       <Link to ="/" className="d-block my-3 nava">Home</Link>
       <Link  to ="/search "className="d-block  my-3 nava">Search</Link>
       <Link to ="/library " className="d-block my-3 nava">Your Library</Link>
       
       
       

    
        </Navbar>
            </>

        )
    }
}
export default withRouter(SideBar)