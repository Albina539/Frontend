import React from "react";

const AddPost = ({posts, title, text, setPosts}) =>{
    const addPost = () =>{
        const id = posts[posts.length-1].id+1;
        setPosts([...posts, {title: title, body: text, userId: 1, id}]);
        console.log(posts);
      };
    return(
        <button type="button" onClick={addPost}>Добавить пост</button>
    );
};

export default AddPost;