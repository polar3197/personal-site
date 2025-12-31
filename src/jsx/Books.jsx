import React from 'react';
import '../css/Page.css'
import '../css/Books.css'
import AILD from '../../assets/imgs/AILD_Cover.png';
import TMM from '../../assets/imgs/TMM_Cover.png';
import CFS from '../../assets/imgs/CFS_Cover.png';
import TLVV from '../../assets/imgs/TLVV_Cover.png';

const Book = ({ id, title, author, summary, image }) => {
    return (
        <>    
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
        </>
    )
};


const Books = () => {
    const books = [
        {
            id: 0,
            title: "The Letters of Vincent van Gogh",
            author: "Vincent van Gogh",
            cover: TLVV,
            summary: "Collected letters of a fastidiously observed life of an artist struggling to justify his artistic life."},
        {
            id: 1,
            title: "As I Lay Dying",
            author: "William Faulkner",
            cover: AILD ,
            summary: "Stream of consciousness, magical, southern, gothic tragedy."
        },
        {
            id: 2,
            title: "Magic Mountain",
            author: "Thomas Mann",
            cover: TMM,
            summary: "Humorous narrative about time, death, coming of age, the history of western philosophy, and its culmination in World War I."
        },
        {
            id: 3,
            title: "Cutting for Stone",
            author: "Abraham Verghese",
            cover: CFS,
            summary: "Amazingly detailed account of twins, born orphans in Ethiopia, the country's civil war, and thorough medical operations."
        }
    ];

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