import React, {Component} from 'react';
import User from "./component/user/User";

class App extends Component {

    users=[
        {name: `Vova`,age:19},
        {name: `Mikel`,age:14},
        {name: `Sveta`,age:42},
        {name: `Roma`,age:43}
    ]
    render() {
        return (
            <div>
                {
                    this.users.map(((value, index) => {
                        return <User item={value} key={index}/>
                    }))
                }
            </div>
        );
    }
}

export default App;