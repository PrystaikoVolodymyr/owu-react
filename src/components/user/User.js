import React, {Component} from 'react';
import './UserStyle.css'

class User extends Component {
    render() {
        let{item,clsName,choseUser}=this.props
        return (
            <div className={clsName}>
                {item.id} = {item.name}
                <button className={'btnStyle'} onClick={()=>{choseUser(item.id)}}>Info</button>
            </div>
        );
    }
}

export default User;