import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentService} from "../../service/commentService";



const CommentsDetails = ({postId})=> {

        const {comment, setComment} = useState(null);
        useEffect(()=>{
            commentService.getById(postId).then(({data})=> setComment(data))
        },[])
        return (
            <div>
                <div>postId:{postId}</div>
                {/*<div>postBody:{post.body}</div>*/}
            </div>

    );
};



export {CommentsDetails};