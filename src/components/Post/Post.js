import React, {useEffect, useState} from 'react';

import {postService} from "../../service";
import {useParams} from "react-router-dom";



    const Post = ({}) => {

        const params = useParams();

        const postIds = params.postId;

        const [post, setPost] = useState(null);


        useEffect(()=>{

            postService.getById(postIds).then(({data})=> setPost(data))

        },[])

        return (
            <div>
                {post&&
                    <>
                        <div>postId:{postIds}</div>
                        <div>postTitle:{post.title}</div>
                        <div>postBody:{post.body}</div>
                    </>
                }
            </div>
        );
};

export {Post};