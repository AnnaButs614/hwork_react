
import './App.css';
import { Routes, Route} from "react-router-dom";
 import {AlbumsPage, CommentsPage,HomePage, NotFoundPage, TodosPage } from "./pages";
import {MainLayouts} from "./layouts";
import {CommentsDetailsPage} from "./pages/ComentsDetailsPage/CommentsDetailsPage";
import {Post} from "./components/Post/Post";

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
            <Route path={'post/:postId'} element={<Post/>}/>;

    </Route>
        <Route path={'*'} element={<NotFoundPage/>}/>;


      </Routes>
      </div>
  )
}

export {App}
