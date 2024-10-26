"use client"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#007BFF', // Primary color
      },
      secondary: {
        main: '#fff', // Secondary color (light background)
      },
      background: {
        default: '#fcfcfc', // Background color
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10, // Customize button border radius
            padding:10,
            backgroundColor: '#007BFF1A', // Hover background color
            borderColor: '#007BFF', 
            boxShadow: 'none', // Remove default box shadow
            '&:hover': {
              borderColor: '#007BFF1A', // Hover background color
              backgroundColor: '#007BFF',
              color:"#fff" // Hover border color
            },
          },
        },
      },
    },
  });
export default theme;
