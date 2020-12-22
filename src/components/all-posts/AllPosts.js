import React, {Component} from 'react';
import PostService from "../services/PostService";
import Post from "../post/Post";

class AllPosts extends Component {

    state={posts:[]}

    PostService=new PostService()

    async componentDidMount() {
     let posts=await this.PostService.getAllPosts()
        this.setState({posts})
    }


    render() {
        let {posts}=this.state
        return (
            <div>
                {
                    posts.map((value, index) => {
                        return <Post
                        item={value}
                        key={index}
                        />
                    })
                }
            </div>
        );
    }
}

export default AllPosts;