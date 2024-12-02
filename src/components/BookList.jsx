import React from 'react';
import BookCard from './BookCard';


const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default BookList;
