import { Link } from "react-router-dom";
import { useState } from "react";
function Routers(){
    

    return(
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/catlog">Catlog</Link></li>
            <li><Link to="/event-organization">Event Organization</Link></li>
            <li><Link to="/event-tracking">Event Tracking</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ul>
    )
}

export default Routers;