import React from 'react';
import {useForm} from "react-hook-form";
import {CommentsRequest} from "../CommentsRequest/CommentsRequest";


const CommentsForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode:'all',})


    const submit = (data) => {
        CommentsRequest.createComments(data).then(({data})=>console.log(data))
        reset()
    }
    return (

            <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="name"{...register('name')}/>
            <input type="text" placeholder="email"{...register('email')}/>
            <input type="text" placeholder="body"{...register('body')}/>
            <button>Create new comments</button>

        </form>
    );
};

export {CommentsForm}