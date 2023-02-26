import css from './Header.module.css';
import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage} from "../../pages";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to = {''}>HomePage</NavLink>
                <NavLink to = {'albums'}>AlbumsPage</NavLink>
                <NavLink to = {'todos'}>TodosPage</NavLink>
                <NavLink to = {'comments'}>CommentsPage</NavLink>

        </div>
    );
};

export {Header};