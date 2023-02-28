import React from 'react';

import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, body} = comment;


    return (
        <div>
            <div>id:{id}</div>
            <div>postId:{postId}</div>
            <div>name:{name}</div>
            <div>body:{body}</div>
            <Link to = {`/post/${id.toString()}`}>Post</Link>




        </div>
    );
};

export {Comment};