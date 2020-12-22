import React, {Component} from 'react';
import AllUsers from "./components/all-user/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/users'}>
                        users
                    </Link>
                    <br/>
                    <Link to={'/posts'}>
                        posts
                    </Link>
                    <Switch>
                        <Route path={'/users'}  render={()=>{
                            return <AllUsers/>
                        }} />
                        <Route path={'/posts'} render={()=>{
                            return <AllPosts/>
                        }}/>

                    </Switch>


                </div>
            </Router>

        );
    }
}

export default App;