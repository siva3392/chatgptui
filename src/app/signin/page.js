import Image from "next/image";
import SignupComp from "../components/signupcomp";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Dashboard from "../components/dashboard";
export default function Signin() {
  return (
   <><ThemeProvider theme={theme}>
    <SignupComp/>
    </ThemeProvider>
   </>
  );
}
