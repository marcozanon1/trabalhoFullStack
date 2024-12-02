import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Verde (cor principal)
    },
    secondary: {
      main: '#ffffff', // Branco (cor secundária)
    },
    background: {
      default: '#ffffff', // Cor de fundo (branco)
    },
    text: {
      primary: '#000000', // Cor do texto (preto, para contraste)
    },
  },
});

export default theme;
