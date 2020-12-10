import React, {Component} from 'react';
import {UserServices} from "../services/UserServices";
import User from "../user/User";
import './AllUsersStyle.css'

class AllUsers extends Component {

    state={users:[],chosenUser:null}

    UserServices=new UserServices()

    componentDidMount() {
        this.UserServices.getAllUsers().then(users=>this.setState({users}))
    }

    choseUser=(id)=>{
        this.UserServices.clickOnUser(id).then(chosenUser=>this.setState({chosenUser}))

    }

    render() {
        let{users,chosenUser}=this.state
        return (
            <div>
                <h3 className={'header'}>All Users</h3>
                {
                    users.map((value, index) => {
                        let clsName=`one`
                        if (index%2){
                            clsName=`one`
                        }else {
                            clsName=`two`
                        }
                        return <User
                        item={value}
                        key={index}
                        clsName={clsName}
                        choseUser={this.choseUser}
                        />
                    })
                }
                <hr/>
                {
                    chosenUser && <h4>{chosenUser.name} (phone number: {chosenUser.phone})</h4>
                }
            </div>
        );
    }
}

export default AllUsers;