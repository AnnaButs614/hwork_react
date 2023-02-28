import css from './Header.module.css';
import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage} from "../../pages";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to = {''}>Home</NavLink>
                <NavLink to = {'albums'}>Albums</NavLink>
                <NavLink to = {'todos'}>Todos</NavLink>
                <NavLink to = {'comments'}>Comments</NavLink>

        </div>
    );
};

export {Header};