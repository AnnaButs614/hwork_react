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
                {/*{comment&&<>*/}
                {/*<div>postId:{postId}</div>*/}
                {/*<div>title:{post.title}</div>*/}
                {/*<div>body:{post.body}</div>*/}
                {/*</>*/}
            {/*}*/}
            </div>

    );
};



export {CommentsDetails};