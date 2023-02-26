
import './App.css';
import { Routes, Route} from "react-router-dom";
 import {AlbumsPage, CommentsPage,HomePage, NotFoundPage, TodosPage } from "./pages";
import {Header} from "./components/Header/Header";
import {MainLayouts} from "./layouts";
import {CommentsDetails} from "./components";
import {CommentsDetailsPage} from "./pages/ComentsDetailsPage/CommentsDetailsPage";
// import {HomePage} from "./pages";

const App = () => {
  return (
      <div>

    <Routes>
        <Route path={'/'} element={<MainLayouts/>}>
      <Route index element={<HomePage/>}/>
        <Route path={'albums'} element={<AlbumsPage/>}/>;
      <Route path={'todos'} element={<TodosPage/>}/>;
       <Route path={'comments'} element={<CommentsPage/>}/>;
            <Route path={'comments/:postId'} element={<CommentsDetailsPage/>}/>;

    </Route>
        <Route path={'*'} element={<NotFoundPage/>}/>;


      </Routes>
      </div>
  )
}

export {App}
