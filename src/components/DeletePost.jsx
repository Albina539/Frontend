import React from "react";

const DeletePost = ({posts, setPosts, id}) =>{
        const deletePost = () =>{
            setPosts(posts.filter((post) => post.id !== id));
  }
  return (
    <button type="button" onClick={deletePost}>Удалить пост</button>
  );
};

export default DeletePost;