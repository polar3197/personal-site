import React from 'react';
import '../css/Page.css'
import '../css/Books.css'
import booksList from './data/booksList.jsx';

const Book = ({ id, title, author, summary, image }) => {
    return (
        <div className="Project-list-elem">
            <div className="Book-icon">
                <img src={image} alt={title} />
            </div>
            <div className="Book-review">
                {id === 0 && <p><strong>*Currently Reading*</strong></p>}
                <h4><i>{title}</i>, {author}</h4>
                <p>{summary}</p>
                <p></p>
            </div>
        </div>
    )
};


const Books = () => {

    const books = booksList;

    return (
        <>
            <div className="Header">
                Books
            </div>
            {/* <div className="Book-suggestions">
                <p>Submit a book suggestion! (It's completely anonymous)</p>
                <input id="bookSgn" type='text'/>
                <button id="submitBtn">Submit</button>
            </div> */}
            <div className="Page-Content-inner">
                <div className="Project-list">
                    {books.map(book => (
                        <Book
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            summary={book.summary}
                            image={book.cover}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Books;