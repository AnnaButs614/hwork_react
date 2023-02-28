import React from 'react';
import {CommentsDetails} from "../../components/CommentsDetails/CommentsDetails";
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