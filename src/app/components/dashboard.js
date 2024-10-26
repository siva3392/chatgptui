"use client"
import { useState } from 'react';
import Sidebar from './sidebar';
import ChatArea from './chatarea';

import { Box, IconButton, useMediaQuery, useTheme, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute', top: 10, left: 10 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': { width: 250 },
            }}
          >
            <Sidebar />
          </Drawer>
        </>
      ) : (
        <Sidebar />
      )}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          //ml: isMobile ? 0 : 30, // Margin adjustment for desktop
        }}
      >
        <ChatArea />
        
      </Box>
    </Box>
  );
}
