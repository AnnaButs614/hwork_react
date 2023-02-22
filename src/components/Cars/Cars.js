import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({cars, setUpdateCar}) => {
    // const[cars,setCars] = useState([])
    // useEffect( () => {carService.getAll().then(({data})=> setCars([...data]))}, [])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setUpdateCar = {setUpdateCar}/>)}
        </div>
    );
};

export {Cars};