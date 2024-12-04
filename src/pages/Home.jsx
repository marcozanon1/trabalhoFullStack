import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

const Home = () => {
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
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ color: '#fff' }}>
        Bem-vindo ao Gerenciador de Biblioteca
      </Typography>
      <Typography variant="h6" paragraph>
        Gerencie sua coleção de livros de forma simples e eficiente.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <Link to="/books">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#007bff',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            Ver Livros
          </Button>
        </Link>
        <Link to="/add">
          <Button
            variant="contained"
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
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
