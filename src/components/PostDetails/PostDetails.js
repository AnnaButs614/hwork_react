import React from 'react';

const PostsDetails = ({post}) => {

    const {id, title, body, userId} = post

    return (
        <div>
            {post && <div>
                <div>id: {post.id}</div>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
                <div>userId: {post.userId}</div>
                {/*<button onClick={()=>setPostDetails(post)}>GetDetails</button>*/}
            </div>}
        </div>
    );
};



export {PostsDetails};