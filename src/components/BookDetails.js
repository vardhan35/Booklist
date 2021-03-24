import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({book}) => {
    const {removeBook} = useContext(BookContext);
    return (
        <div>
            <li onClick={()=>removeBook(book.id)} className="list">
                <div>{book.title}</div>
                <div>{book.author}</div>
            </li>
        </div>
    )
}

export default BookDetails
