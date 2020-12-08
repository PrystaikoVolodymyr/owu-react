import React, {Component} from 'react';

class PostComponent extends Component {


    render() {
        let {item, colorHash,selectThisPost}=this.props
        return (
            <div style={{backgroundColor: `#${colorHash}`}}>
                ID=={item.id}
                <br/>
                Title==''{item.title}''
                <br/>
                Body==''{item.body}''
                <button onClick={()=>{selectThisPost(item.id)}}>DELETE</button>
                <hr/>
            </div>
        );
    }
}

export default PostComponent;