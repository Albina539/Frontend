import React from "react";
import DeletePost from "./DeletePost";

const Post = ({post, posts, setPosts}) => {

    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <DeletePost posts={posts} setPosts={setPosts} id={post.id}/>
        </div>
    );
};

export default Post;