import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class User extends Component {

    render() {
        let {item,match:{url}}=this.props
        console.log(this.props)
        return (
            <div>
                {item.name}-{item.id}-<Link to={`${url}/${item.id}`}>INFO</Link>
            </div>
        );
    }
}

export default  withRouter(User);