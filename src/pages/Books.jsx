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
    axios
      .get('https://trabalhofullstack-backend-5.onrender.com/api/books')
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
      axios
        .delete(`https://trabalhofullstack-backend-5.onrender.com/api/books/${id}`)
        .then(() => setBooks(books.filter((book) => book.id !== id)))
        .catch((error) => console.error('Erro ao excluir livro:', error));
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#333',
        }}
      >
        <CircularProgress sx={{ color: '#fff' }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: 'auto',
        mt: 5,
        p: 3,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: '#fff' }}>
        Lista de Livros
      </Typography>
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
      <Box sx={{ textAlign: 'center', mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          onClick={() => navigate('/add')}
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Adicionar Livro
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            backgroundColor: '#6c757d',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#5a6268',
            },
          }}
        >
          Página Inicial
        </Button>
      </Box>
    </Box>
  );
};

export default Books;
