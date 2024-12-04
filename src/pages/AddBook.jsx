import React from 'react';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    axios
      .post('https://trabalhofullstack-backend-5.onrender.com/api/books', data)
      .then(() => navigate('/books'))
      .catch((error) => console.error('Erro ao adicionar livro:', error));
  };

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
        Adicionar Novo Livro
      </Typography>
      <BookForm onSubmit={handleSubmit} />
      <Box sx={{ textAlign: 'center', mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          onClick={() => navigate('/books')}
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Voltar à Lista de Livros
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

export default AddBook;
