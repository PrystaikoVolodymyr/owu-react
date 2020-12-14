import React, {Component} from 'react';
import UserServices from "../services/UserServices";
import User from "../user/User";

class AllUsers extends Component {

    state={users:[]}

    UserService=new UserServices()

    async componentDidMount() {
        let users=await this.UserService.getAllUsers()
        this.setState({users})
    }

    render() {
        let {users}=this.state
        return (
            <div>
                {
                    users.map((value, index) => {
                        return <User
                        item={value}
                        key={index}
                        />
                    })
                }
            </div>
        );
    }
}

export default AllUsers;