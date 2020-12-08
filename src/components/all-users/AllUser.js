import React, {Component} from 'react';
import User from "../user/User";
import './AllStyle.css'
class AllUser extends Component {

 state={users:[], classState:`red`, chosenUser:null}

 redColor=false

 componentDidMount() {
     fetch(`https://jsonplaceholder.typicode.com/users`)
         .then(value => value.json())
         .then(userFromAPI=>{
             this.setState({users: userFromAPI})
         })
 }

 clickAll = () => {
    if (this.redColor){
        this.setState({classState:`red`})
    }else {
        this.setState({classState:`green`})
    }
    this.redColor=!this.redColor
 }

 selectThisUser=(id)=>{
     let chosenUser=this.state.users.find(value => value.id===id)
     this.setState({chosenUser})
 }
    render() {

     let {users,classState,chosenUser}=this.state
        return (
            <div>
                <h3 onClick={this.clickAll} className={classState}>ALL USERS ARE HERE</h3>
                {
                    users.map(((value, index) =>
                            <User
                                item={value}
                                key={index}
                                selectUser={this.clickAll}
                            />


                    ))
                }
                <hr/>


            </div>
        );
    }
}

export default AllUser;