import React from 'react';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material'; 

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    axios.post('http://localhost:8080/api/books', data)
      .then(() => navigate('/books'))
      .catch((error) => console.error('Erro ao adicionar livro:', error));
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Adicionar Novo Livro
      </Typography>
      <BookForm onSubmit={handleSubmit} />
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button variant="contained" color="secondary" onClick={() => navigate('/books')}>
          Voltar à Lista de Livros
        </Button>
      </Box>
    </Box>
  );
};

export default AddBook;
