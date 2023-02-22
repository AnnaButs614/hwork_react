import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {options} from "axios";
import Joi from "joi";
import {carValidator} from "../../validators/CarValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services";
import {App} from "../../App";

const CarForm = ({setCars, updateCar, deleteCar}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all',
        resolver: joiResolver(carValidator)});

    useEffect(()=> {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        } else if (deleteCar) {
            console.log('delete')
            console.log(deleteCar.id);
            carService.delete(deleteCar.id);
             reset()
        }
    },[]);



    const submit = async (car) => {
        if (updateCar){console.log('update')
            console.log(updateCar.id)
            const {data} = await carService.updateById(updateCar.id,car)
            reset()
        }
        else if (!updateCar){
        const {data} = await carService.create(car);
        setCars(prev =>[...prev, data])
        reset()}
    };

    return (

        <form onSubmit={handleSubmit (submit)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span>error.brand.messages</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price&&<span>error.price.messages</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.years&&<span>error.years.messages</span>}
            {console.log(updateCar)}
            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>

        </form>
    );
};

export {CarForm};