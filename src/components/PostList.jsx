import Input from "./UI/Input";
import Posts from "./Posts";
import AddPostForm from "./UI/AddPostForm";
import { useState } from "react";

const PostList = () =>{
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    return(
        <>
        <Input value={search} setValue={setSearch} placeholder="Поиск..."/>
        <Posts posts={posts} setPosts={setPosts} search={search} />
        <AddPostForm posts={posts} setPosts={setPosts}/>
        </>
    );
};

export default PostList;