import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {postService} from "../../service/postService";
import {PostsDetails} from "../PostDetails/PostDetails";


const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState( null);

    useEffect(() => {
        postService.getAll.then(value => value.data).then(value => setPosts([...value]))
    }, [])
    console.log(posts);
    return (
        <div>
            <h1>PostDetails</h1>
            {postDetails && <PostsDetails post={postDetails}/> }
            <hr/>
            <h1>Posts:</h1>
            {/*<button onClick={()=>setCount(prevState => prevState+1)}>click</button>*/}
            {posts.map(post=><Post key={post.id} post = {post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};
export {Posts};