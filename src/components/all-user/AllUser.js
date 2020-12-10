import React, {Component} from 'react';
import User from "../user/User";
import {UserServices} from "../services/UserServices";


class AllUser extends Component {

    state={users:[],clsName:`one`,chosenUser:null}

    userServices=new UserServices()

    componentDidMount() {
        this.userServices.getAllUsers()
            .then(value => this.setState({users:value}))
    }

    clickOnUser=(id)=>{
       this.userServices.choseUser(id).then(value => this.setState({chosenUser:value}))
    }


    render() {
            let {users,clsName,chosenUser}=this.state
        return (
            <div>
                <h2>ALL USERS</h2>
                {
                 users.map((value, index) => {
                     if (index%2){
                         clsName=`two`
                     }else {
                         clsName=`one`
                     }
                     return(<User
                         item={value}
                         key={index}
                         className={clsName}
                         click={this.clickOnUser}
                     />)
                 })
                }
                <hr/>
                {
                    chosenUser && <h4>{chosenUser.name} - {chosenUser.email}</h4>
                }

            </div>
        );
    }
}

export default AllUser;