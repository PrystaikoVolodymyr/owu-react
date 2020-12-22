import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "../user/User";

class AllUsers extends Component {

    state={users:[]}

    UserService=new UserService()

    async componentDidMount() {
        let users=await this.UserService.getAllUsers()
        this.setState(users)
    }


    render() {
let {users}=this.state
        return (
            <div>
                {users.map((value, index) => {
                    return <User
                    item={value}
                    key={index}
                    />
                })}
            </div>
        );
    }
}

export default AllUsers;