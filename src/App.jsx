import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './styles/theme'; 
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Envolvendo a aplicação com o ThemeProvider */}
      <div className="App">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
