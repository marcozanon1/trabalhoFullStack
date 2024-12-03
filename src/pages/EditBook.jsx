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
    axios.get(`http://localhost:8080/api/books/${id}`)
      .then((response) => setInitialData(response.data))
      .catch((error) => console.error('Erro ao carregar livro:', error));
  }, [id]);

  const handleSubmit = (data) => {
    axios.put(`http://localhost:8080/api/books/${id}`, data)
      .then(() => navigate('/books'))
      .catch((error) => console.error('Erro ao editar livro:', error));
  };

  if (!initialData) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    ); // Exibe o loading enquanto os dados estão sendo carregados
  }

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Editar Livro
      </Typography>
      <BookForm initialData={initialData} onSubmit={handleSubmit} />
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={() => navigate('/books')}>
          Voltar para a lista de livros
        </Button>
      </Box>
    </Box>
  );
};

export default EditBook;
