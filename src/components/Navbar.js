import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

const Navbar =()=>{
    const {books} = useContext(BookContext)
    return(
        <div className="navbar">
            <h1>BookList</h1>
            <p>we have {books.length} Books.</p>
        </div>
    );
}

export default Navbar;