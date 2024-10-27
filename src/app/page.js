import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./components/dashboard";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
export default function Home() {
  return (
   <><ThemeProvider theme={theme}>
     <Dashboard/>
    </ThemeProvider>
   </>
  );
}
