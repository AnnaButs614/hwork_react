import {Air} from "../air/air";
import {useEffect, useState} from "react";
import {airService} from '../Servise/airService'


const Airs = () => {
    const [airs, setAirs] = useState([]);


    useEffect(() => {
        airService.getAll.then(value => value.data).then(value => setAirs([...value]))
    }, [])

    return (
        <div>
            {airs.map(air=><Air key={air.flight_number} air = {air}/>)}
        </div>
    );
};
export {Airs};