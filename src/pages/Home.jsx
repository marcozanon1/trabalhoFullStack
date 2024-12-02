import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Gerenciador de Biblioteca</h1>
      <p>Gerencie sua coleção de livros de forma simples e eficiente.</p>
      <div>
        <Link to="/books">
          <button>Ver Livros</button>
        </Link>
        <Link to="/add">
          <button>Adicionar Livro</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
