import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Button, CircularProgress } from '@mui/material'; 

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);  
  const navigate = useNavigate();

  useEffect(() => {
     
    axios.get('https://trabalhofullstack-backend-5.onrender.com/api/books')
      .then((response) => {
        setBooks(response.data);
        setLoading(false);  
      })
      .catch((error) => {
        console.error('Erro ao buscar livros:', error);
        setLoading(false);  
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza de que deseja excluir este livro?')) {
      axios.delete(`https://trabalhofullstack-backend-5.onrender.com/api/books/${id}`)
        .then(() => setBooks(books.filter((book) => book.id !== id)))
        .catch((error) => console.error('Erro ao excluir livro:', error));
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );  
  }

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Livros
      </Typography>
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button variant="contained" color="primary" onClick={() => navigate('/add')}>
          Adicionar Livro
        </Button>
      </Box>
    </Box>
  );
};

export default Books;
