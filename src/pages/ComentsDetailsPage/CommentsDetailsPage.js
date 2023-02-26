import React from 'react';
import {Comments, CommentsDetails} from "../../components";
import {useParams} from "react-router-dom";

const CommentsDetailsPage = () => {
    const {postId}=useParams();
    return (
        <div>
            <CommentsDetails postId={postId}/>
        </div>
    );
};

export {CommentsDetailsPage};