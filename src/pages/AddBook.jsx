import React from 'react';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    axios.post('http://localhost:8080/api/books', data)
      .then(() => navigate('/books'))
      .catch((error) => console.error('Erro ao adicionar livro:', error));
  };

  return (
    <div>
      <h1>Adicionar Novo Livro</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddBook;
