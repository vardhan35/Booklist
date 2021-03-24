import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails'
const BookList =()=>{
    const {books}  = useContext(BookContext);
    return books.length ?(
        <div className="book">
            <ul>
                {
                    books.map(book =>{
                        return (<BookDetails book={book} key={book.id}/>);
                    })
                }
            </ul>
        </div>
    ): (
        <div>No Books</div>
    )
}

export default BookList;