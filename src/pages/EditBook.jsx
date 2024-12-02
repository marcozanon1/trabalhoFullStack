import React, { useEffect, useState } from 'react';
import BookForm from '../components/BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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

  if (!initialData) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Editar Livro</h1>
      <BookForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditBook;
