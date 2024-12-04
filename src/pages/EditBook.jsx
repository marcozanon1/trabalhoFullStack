import React, { useEffect, useState } from 'react';
import BookForm from '../components/BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, CircularProgress, Button } from '@mui/material';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://trabalhofullstack-backend-5.onrender.com/api/books/${id}`)
      .then((response) => setInitialData(response.data))
      .catch((error) => console.error('Erro ao carregar livro:', error));
  }, [id]);

  const handleSubmit = (data) => {
    axios
      .put(`https://trabalhofullstack-backend-5.onrender.com/api/books/${id}`, data)
      .then(() => navigate('/books'))
      .catch((error) => console.error('Erro ao editar livro:', error));
  };

  if (!initialData) {
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
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: '#ccc' }}>
        Editar Livro
      </Typography>
      <BookForm initialData={initialData} onSubmit={handleSubmit} />
      <Box sx={{ textAlign: 'center', mt: 3 }}>
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
          Voltar para a Lista de Livros
        </Button>
      </Box>
    </Box>
  );
};

export default EditBook;
