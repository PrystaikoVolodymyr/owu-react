import React, {Component} from 'react';
import './UserStyle.css'
class User extends Component {
    render() {
        let {item,className,click}=this.props

        return (
            <div className={className}>
                {item.id} - {item.name}
                <button onClick={()=>{click(item.id)}}>Chose ME</button>

            </div>
        );
    }
}

export default User;