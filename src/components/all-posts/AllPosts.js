import React, {Component} from 'react';
import PostServices from "../services/PostServices";

class AllPosts extends Component {
    state={posts:[]}

    PostService =new PostServices()

    async componentDidMount() {
        let posts=await this.PostService.getAllPosts()
        this.setState({posts})
    }

    render() {

        return (
            <div>
            All Posts Are HERE
            </div>
        );
    }
}

export default AllPosts;