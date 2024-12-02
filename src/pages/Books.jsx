import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch livros do backend
    axios.get('http://localhost:8080/api/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Erro ao buscar livros:', error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza de que deseja excluir este livro?')) {
      axios.delete(`http://localhost:8080/api/books/${id}`)
        .then(() => setBooks(books.filter((book) => book.id !== id)))
        .catch((error) => console.error('Erro ao excluir livro:', error));
    }
  };

  return (
    <div>
      <h1>Lista de Livros</h1>
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Books;
