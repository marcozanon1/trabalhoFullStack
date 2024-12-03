import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material'; // Importando componentes do MUI

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Bem-vindo ao Gerenciador de Biblioteca
      </Typography>
      <Typography variant="h6" paragraph>
        Gerencie sua coleção de livros de forma simples e eficiente.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Link to="/books">
          <Button variant="contained" color="primary">Ver Livros</Button>
        </Link>
        <Link to="/add">
          <Button variant="contained" color="secondary">Adicionar Livro</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
