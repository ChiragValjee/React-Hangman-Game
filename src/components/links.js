//The Help function returns a JSX code block that contains two Link components.
// The Link component is used to create a clickable link that routes to another component in the React application.

import React from "react";
import {Link} from "react-router-dom";

function Help() {
    return (
        <div className="help">
            <Link to="/instructions" className="link1">Instructions</Link>
            <Link to="/" className="link2">Home</Link>
        </div>
    )
}

export default Help