import React, {useEffect, useState} from 'react';

import {postService} from "../../service";



const CommentsDetails = ({postId})=> {

        const {post, setPost} = useState(null);


        useEffect(()=>{

            postService.getById(postId).then(({data})=> setPost(data))

        },[])

        return (
            <div>
                {post&&
                    <>
                <div>postId:{postId}</div>
                <div>postTitle:{post.title}</div>
                <div>postBody:{post.body}</div>
                    </>
            }
            </div>

    );
};



export {CommentsDetails};