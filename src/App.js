
import './App.css';
import {CarForm} from "./components/CarForm/CarForm";
import {Cars} from "./components/Cars/Cars";
import {useEffect, useState} from "react";
import {carService} from "./services";
import {Users} from "./components/Users/Users";
import {UsersForm} from "./components/UsersForm/UsersForm";
import {UserRequest} from "./components/UsersRequest/UserRequest";
import {CommentsRequest} from "./components/CommentsRequest/CommentsRequest";
import {Comments} from "./components/Comments/Comments";
import {CommentsForm} from "./components/CommentsForm/CommentsForm";


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
  //
  // )};

const [comments, setComments] = useState([]);
useEffect(() => {
    CommentsRequest.getAll()
        .then(({data}) => setComments() ([...data]))

},[])

return (
    <div>
        <Comments comments={comments}/>
        <hr/>
        <CommentsForm/>
    </div>

);}



  // function App() {
//     const [cars, setCars] = useState([])
//     const [updateCar, setUpdateCar] = useState(null);
//     const [deleteCar, setDeleteCar] = useState(null);
//
//     useEffect(() => {
//       carService.getAll()
//           .then(({data}) => setCars([...data]))
//     }, [])
//
//     return (
//         <div className="App">
//           <CarForm setCars={setCars} updateCar={updateCar} deleteCar={deleteCar}/>
//           <hr/>
//           <Cars cars={cars} setUpdateCar={setUpdateCar} setDeleteCar={setDeleteCar}/>
//         </div>
//     );
//   // }
// };

export {App};
