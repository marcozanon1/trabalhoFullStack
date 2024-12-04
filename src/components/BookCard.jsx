import React from 'react';
import { Button } from '@mui/material';

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Descrição:</strong> {book.description}</p>
      <div className="actions">
        <Button variant="contained" onClick={() => onEdit(book.id)}>
          Editar
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(book.id)}
          style={{ marginLeft: '8px' }}
        >
          Excluir
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
