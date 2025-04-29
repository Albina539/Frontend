import React, { useState } from "react";
import Form from "../Form";
import Button from "./Button";

const AddPostForm = ({ posts, setPosts}) =>{
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const addPost = () =>{
        const id = posts[posts.length-1].id+1;
        setPosts([...posts, {title: title, body: text, userId: 1, id}]);
      };

      return(
        <form>
        <Form
          htmlFor = "title"
          labelText = "Заголовок"
          value = {title}
          setValue = {setTitle}
          name = "title"/>
        <Form 
          htmlFor = "text"
          labelText = "Текст"
          value = {text}
          setValue = {setText}
          name = "text"/>
        <Button  onClick={addPost}/>
      </form>
      );
};

export default AddPostForm;