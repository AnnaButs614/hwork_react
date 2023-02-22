import React from 'react';
import {useForm} from "react-hook-form";
import {UserRequest} from "../UsersRequest/UserRequest";
const UsersForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode:'all',})

    const submit = (data) => {
        //console.log(data)
         UserRequest.createUsers(data).then(({data})=>console.log(data))
        reset()
        }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username"{...register('username')}/>
            <input type="text" placeholder="user"{...register('user')}/>
            <input type="text" placeholder="email"{...register('email')}/>
            <button>Create new user</button>

        </form>
    );
};

export {UsersForm};