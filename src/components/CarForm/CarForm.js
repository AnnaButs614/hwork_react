import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";

import {carValidator} from "../../validators/CarValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services";


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

        }
    },[updateCar,deleteCar]);



    const submit = async (car) => {
        if (updateCar){console.log('update')
            console.log(updateCar.id)
            const {data} = await carService.updateById(updateCar.id,car)

        }
        else if (!updateCar){
        const {data} = await carService.create(car);
        setCars(prev =>[...prev, data])
        reset()}
    };

    return (

        <form onSubmit={handleSubmit (submit)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span>Тільки букви від 1 до 20 символів</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price&&<span>Від 1 до 1000000</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year&&<span>Від 1990 до поточного року)</span>}

            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>

        </form>
    );
};

export {CarForm};