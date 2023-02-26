import React, {useEffect, useState} from 'react';
import {todosService} from "../../service";
import {Comment} from "../Comment/Comment";
import {commentService} from "../../service/commentService";

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(()=>{
        commentService.getAll().then(({data}) => setComments([...data]))
    },[])
    return (
        <div>
            {comments.map(comment =><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};