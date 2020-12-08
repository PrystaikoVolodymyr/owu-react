import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

class AllPostComponents extends Component {

    state = {posts: [],chosenPost: null}


    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(postFromApi => {
                this.setState({posts: postFromApi})
            })
    }
    selectThisPost=(id)=>{
        let chosenPost=this.state.posts.find(value => value.id===id)
        this.setState({chosenPost})
    }

    render() {
        let {posts, chosenPost} = this.state
        let color = 965632;
        return (

            <div>

                {
                    posts.map((value) => <PostComponent
                        colorHash = {color + value.userId * 1000}
                        item={value}
                        key={value.id}
                        selectThisPost={this.selectThisPost}
                        />
                    )
                }


            </div>
        );
    }
}

export default AllPostComponents;