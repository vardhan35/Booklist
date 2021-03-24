import React,{useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext'

const BookForm=()=>{
    const {addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <h2>Add Your Books</h2>
            <input type="text" placeholder="Book title" className="title" value={title}
            onChange={(e) =>setTitle(e.target.value)} required/>
            <input type="text" placeholder="Book title" value={author}
            onChange={(e) =>setAuthor(e.target.value)} className="author" required/>
            <button type="submit" className="button">submit</button>
        </form>
    )
}

export default BookForm
