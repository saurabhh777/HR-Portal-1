import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import logo from '../images/ps-logo.png'
import Sidebar from '../components/Sidebar';
import pfp from '../images/pfp.jpeg'
// import Features from '../components/Features';


export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // useEffect(() => {
  //   if (!sessionStorage.getItem("token")) {
  //     window.location.href="/dashboard"
  //   } 
  // });

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <Link to={'/'} id='logout'><MenuItem>Logout</MenuItem></Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="dashboard">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className='top'>
          <Toolbar>
            <a href="https://www.prissoft.net/" target="_blank" rel="noreferrer" className="logo">
              <img src={logo} alt="logo" height={"30px"} />
            </a>
            {/* <Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, color: "black", textAlign: "center" }}
              >
                MUI
              </Typography>
            </Box> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box className='pfp' sx={{ display: { xs: 'none', md: 'flex' } }}>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className='pfp'
              >
                <Avatar src={pfp} alt="profile" max-height="100px" />
              </IconButton>
            </Box>
           
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                className='mini'
              >
                <MoreIcon />
              </IconButton>
            </Box>

          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Sidebar />
      </Box>
    </div>
  );
}