
import './App.css';
import {CarForm} from "./components/CarForm/CarForm";
import {Cars} from "./components/Cars/Cars";
import {useEffect, useState} from "react";
import {carService} from "./services";
import {Users} from "./components/Users/Users";
import {UsersForm} from "./components/UsersForm/UsersForm";
import {UserRequest} from "./components/UsersRequest/UserRequest";


const App = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   UserRequest.getAll()
  //       .then(({data}) => setUsers ([...data]))
  //
  // },[])
  // return (
  // <div>
  //   <Users users={users}/>
  //   <hr/>
  //   <UsersForm/>
  // </div>

  // )};
  function App() {
    const [cars, setCars] = useState([])
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
      carService.getAll()
          .then(({data}) => setCars([...data]))
    }, [])

    return (
        <div className="App">
          <CarForm setCars={setCars} updateCar={updateCar}/>
          <hr/>
          <Cars cars={cars} setUpdateCar={setUpdateCar}/>
        </div>
    );
  }
};

export {App};
