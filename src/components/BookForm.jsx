import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const BookForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    title: false,
    author: false,
    description: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validate = () => {
    const newErrors = {
      title: !formData.title.trim(),
      author: !formData.author.trim(),
      description: !formData.description.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 3,
        p: 3,
        backgroundColor: '#333',
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        color: '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Título"
            name="title"
            variant="outlined"
            value={formData.title}
            onChange={handleChange}
            error={errors.title}
            helperText={errors.title ? 'Título é obrigatório' : ''}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff', backgroundColor: '#444' },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Autor"
            name="author"
            variant="outlined"
            value={formData.author}
            onChange={handleChange}
            error={errors.author}
            helperText={errors.author ? 'Autor é obrigatório' : ''}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff', backgroundColor: '#444' },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Descrição"
            name="description"
            variant="outlined"
            multiline
            rows={3}
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            helperText={errors.description ? 'Descrição é obrigatória' : ''}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff', backgroundColor: '#444' },
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: '#28a745',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#218838',
              },
            }}
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookForm;
