import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item}=this.props
        return (
            <div>
                <h4>BODY</h4>
                {item.body}

            </div>
        );
    }
}

export default Post;