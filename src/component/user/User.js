import React, {Component} from 'react';
import './UserStyle.css'

class User extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={`itemStyle`}>
                {item.name}={item.age} age
            </div>
        );
    }
}

export default User;