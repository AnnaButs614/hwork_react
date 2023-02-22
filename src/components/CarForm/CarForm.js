import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {options} from "axios";
import Joi from "joi";
import {carValidator} from "../../validators/CarValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services";

const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all',
        resolver: joiResolver(carValidator)});

    useEffect(()=>{
        if (updateCar){
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar] )

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(prev =>[...prev, data])
        reset()
    };

    return (

        <form onSubmit={handleSubmit (submit)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span>error.brand.messages</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price&&<span>error.price.messages</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.years&&<span>error.years.messages</span>}

            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>

        </form>
    );
};

export {CarForm};