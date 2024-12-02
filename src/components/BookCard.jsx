import React from 'react';


const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Descrição:</strong> {book.description}</p>
      <div className="actions">
        <button onClick={() => onEdit(book.id)}>Editar</button>
        <button onClick={() => onDelete(book.id)}>Excluir</button>
      </div>
    </div>
  );
};

export default BookCard;
