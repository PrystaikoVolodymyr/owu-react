import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "../user/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AllUsers extends Component {

    state={users:[]}

    UserService=new UserService()

    async componentDidMount() {
        let users=await this.UserService.getAllUsers()
        this.setState({users})

    }



    render() {
let {users}=this.state
        console.log(users)
        return (
            <div>
                {users.map((value, index) => {
                    return <User
                    item={value}
                    key={index}
                    />
                })}
                <hr/>
                <hr/>
                <Switch>
                    <Route path={`/users/:id`} render={()=>{
                        return `dsfdsff`
                    }}/>

                </Switch>
            </div>
        );
    }
}

export default AllUsers;