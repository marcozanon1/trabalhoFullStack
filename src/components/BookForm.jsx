import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h6>{book.title}</h6>
          <div>
            <button onClick={() => onEdit(book.id)}>Editar</button>
            <button onClick={() => onDelete(book.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
