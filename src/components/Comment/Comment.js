import React from 'react';

const Comment = ({comment}) => {
    const {id, postId, name, body} = comment;

    return (
        <div>
            <div>id:{id}</div>
            <div>postId:{postId}</div>
            <div>name:{name}</div>
            <div>body:{body}</div>
            <button onClick={onsubmit}>Post</button>
        </div>
    );
};

export {Comment};