import {
  Box,
  Button,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  InputAdornment ,
} from "@mui/material";
import theme from "../theme";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import Link from "next/link";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { styled } from '@mui/system';
export default function SidebarSignup() {
  const [showPassword, setShowPassword] = useState(false);

  const StyledDivider = styled('div')({
      flex: 1,
      borderBottom: '1px solid #E9ECEF', // Customize the color and thickness
  });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [token, setToken] = useState(null);
  const [error, setError] = useState('');
  const siteKey = '8a62067a-bb4e-4712-840e-714a2d2a186a'; // Replace with your actual hCaptcha site key

  const handleVerificationSuccess = (captchaToken) => {
    setToken(captchaToken);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      setError('Please complete the hCaptcha verification');
      return;
    }
    // Proceed with form submission
    console.log('Form submitted with token:', token);
  };
  return (
    <Box
      sx={{
        width: {
          xs: "100%", // Full width on extra-small screens
          sm: "50%", // 50% width on small screens
          md: "33%", // 33% width on medium screens
          lg: "25%", // 25% width on large screens
        },
        p: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
      id="navbarId"
    >
     
        <Typography
          variant="h5"
          sx={{ mb: 2, textAlign: "center", display: "block", mt: 3,color:"#212529",fontSize:"26px" }}
        >
          Sign in to your account
        </Typography>
        <Box sx={{width:"100%", mb:2 }}>
        <TextField id="outlined-basic" label="Phone number or email" sx={{width:"100%", '& .MuiOutlinedInput-root': {
          borderRadius: '15px',       // Optional border radius
          backgroundColor: '#ffffff', // Set background color to white
          height: '54px',             
          // Set border radius
          '& fieldset': {
            borderColor: '#E9ECEF', // Set border color
          },
          '&:hover fieldset': {
            borderColor: '#007BFF', // Change border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#007BFF', // Change border color when focused
          },
          backgrond:"#fff",
        },
        }} variant="outlined"
        InputProps={{
        style: {  }, // Apply additional padding styles if needed
        
      }}
         />
      
        <Box sx={{width:"100%",mt:2}}>
        <TextField
      variant="outlined"
      placeholder="Enter your password"
      type={showPassword ? 'text' : 'password'} // Toggle between text and password
      label="Password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{width:"100%", '& .MuiOutlinedInput-root': {
          borderRadius: '15px',       // Optional border radius
          backgroundColor: '#ffffff', // Set background color to white
          height: '54px',             
          // Set border radius
          '& fieldset': {
            borderColor: '#E9ECEF', // Set border color
          },
          '&:hover fieldset': {
            borderColor: '#007BFF', // Change border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#007BFF', // Change border color when focused
          },
          backgrond:"#fff",
        },
        }}
    />
       
        </Box>
        <Typography variant="body2" align="right" sx={{mb:2,mt:1,color:"#007BFF"}}>
        <Link href="/forgot-password" underline="hover">
          Forgot Password?
        </Link>
      </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mb: 2,
            fontFamily: "Urbanist",
            fontWeight: 600,
            textTransform: "capitalize",
            fontSize: "18px",
            background:"#007BFF"
          }}
        >
          Sign in
        </Button>
          {/* hCaptcha component */}
          <Box sx={{ width: '100%' }}>
        <HCaptcha
          sitekey={siteKey}
          onVerify={handleVerificationSuccess}
          onError={() => setError('Captcha error, please try again')}
        />
      </Box>

      {/* Display error if hCaptcha is not completed */}
      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
      </Box>
      <Box display="flex" alignItems="center" my={2} >
            <StyledDivider />
            <Typography variant="body1" sx={{ mx: 2,color:"#6C757D" }}>
                Or
            </Typography>
            <StyledDivider />
        </Box>

        <Button variant="outlined" style={{
                border: 'none', // Remove the border
                outline: 'none' // Optionally remove the outline
            }} startIcon={ <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    fill="none"
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M22.783 22.353c.689-1.05.945-1.586 1.47-2.765-3.873-1.47-4.491-6.988-.665-9.1-1.166-1.47-2.811-2.321-4.363-2.321-1.12 0-1.89.291-2.578.56-.584.221-1.109.42-1.762.42-.7 0-1.318-.222-1.972-.455-.711-.257-1.458-.525-2.391-.525-1.739 0-3.594 1.061-4.772 2.881-1.657 2.567-1.365 7.374 1.307 11.48.956 1.47 2.24 3.115 3.908 3.139.7.011 1.155-.199 1.657-.42.571-.257 1.19-.537 2.275-.537 1.085-.012 1.691.28 2.263.537.49.221.933.431 1.622.42 1.691-.024 3.045-1.844 4.001-3.314ZM18.98 2.333c.187 1.284-.338 2.555-1.027 3.442-.735.957-2.018 1.703-3.255 1.657-.221-1.237.35-2.509 1.05-3.36.782-.934 2.1-1.657 3.232-1.739Z"
      clipRule="evenodd"
    />
  </svg>} fullWidth sx={{ mb: 2,mt:1,color:"#000",textTransform:"none",fontSize:"16px" }}>
          Sign in with Apple ID
        </Button>
        <Button variant="outlined"  style={{
                border: 'none', // Remove the border
                outline: 'none' // Optionally remove the outline
            }} startIcon={<svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    fill="none"
   
  >
    <g clipPath="url(#a)">
      <path
        fill="#4285F4"
        d="M28.227 14.322c0-.951-.077-1.908-.242-2.845H14.78v5.392h7.562a6.48 6.48 0 0 1-2.798 4.254v3.498h4.511c2.65-2.438 4.172-6.04 4.172-10.299Z"
      />
      <path
        fill="#34A853"
        d="M14.78 28c3.776 0 6.96-1.239 9.28-3.379l-4.511-3.498c-1.255.854-2.876 1.338-4.764 1.338-3.652 0-6.749-2.464-7.86-5.777H2.27v3.606A14.002 14.002 0 0 0 14.78 28Z"
      />
      <path
        fill="#FBBC04"
        d="M6.92 16.684a8.386 8.386 0 0 1 0-5.36V7.716H2.27a14.012 14.012 0 0 0 0 12.573l4.65-3.606Z"
      />
      <path
        fill="#EA4335"
        d="M14.78 5.541a7.608 7.608 0 0 1 5.37 2.1l3.998-3.998A13.455 13.455 0 0 0 14.78.001 13.997 13.997 0 0 0 2.27 7.717l4.65 3.606c1.106-3.318 4.208-5.782 7.86-5.782Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h28v28H.5z" />
      </clipPath>
    </defs>
  </svg>} fullWidth sx={{ mb: 2,color:"#000",textTransform:"none",fontSize:"16px" }}>
          Sign in with Google
        </Button>
        <Button variant="outlined"  startIcon={<svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    fill="none"
    
  >
    <g clipPath="url(#a)">
      <path
        fill="#1877F2"
        d="M28.5 14c0-7.732-6.268-14-14-14S.5 6.268.5 14c0 6.988 5.12 12.78 11.813 13.83v-9.783H8.758V14h3.555v-3.084c0-3.51 2.09-5.447 5.287-5.447 1.532 0 3.134.273 3.134.273v3.446H18.97c-1.739 0-2.282 1.079-2.282 2.187V14h3.883l-.62 4.047h-3.262v9.783C23.38 26.78 28.5 20.988 28.5 14Z"
      />
      <path
        fill="#fff"
        d="M19.95 18.047 20.57 14h-3.883v-2.625c0-1.107.543-2.188 2.282-2.188h1.765V5.742S19.132 5.47 17.6 5.47c-3.197 0-5.288 1.938-5.288 5.447V14H8.758v4.047h3.555v9.783a14.15 14.15 0 0 0 4.374 0v-9.783h3.263Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h28v28H.5z" />
      </clipPath>
    </defs>
  </svg>}  style={{
                border: 'none', // Remove the border
                outline: 'none' // Optionally remove the outline
            }} fullWidth sx={{ mb: 2,color:"#000",textTransform:"none",fontSize:"16px",display: 'flex', alignItems: 'center' }}>
          Sign in with Facebook
        </Button>

        <Typography variant="body2" align="center" sx={{color:"#212529",fontSize:"18px"}}>
          Don’t you have an account? <span style={{ color: '#1877F2', cursor: 'pointer' }}>Sign up</span>
        </Typography>
    </Box>
  );
}
