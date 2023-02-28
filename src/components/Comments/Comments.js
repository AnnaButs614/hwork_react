import React from 'react';
import {Comment} from "../Comment/Comment";

const Comments = ({comments}) => {
    // const[cars,setCars] = useState([])
    // useEffect( () => {carService.getAll().then(({data})=> setCars([...data]))}, [])
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export {Comments};