import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Search } from '@mui/icons-material';
import React from 'react';

const Header = ({cartcount}) => {
    return (
        <div>
          <Box sx={{flexGrow:1}}>
      <AppBar color='primary' sx={{border:1}} position='static'>
     <Toolbar>
      <IconButton size='large' edge='start' color="inherit"
      aria-label='open dreawer' sx={{mr:2}}>
      <MenuIcon/>
      </IconButton>
      <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          REACT-CART
          </Typography>
          <Search>
              <InputBase placeholder='Search...'
              inputProps={{'arial-label': 'Seacrh'}} type='text' color='warning'/>
              <SearchIcon/>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <a href='/cart'>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error" badgeContent={cartcount}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </a>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls=''
              aria-haspopup="true"
              onClick=''
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls=''
              aria-haspopup="true"
              onClick=''
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
     </Toolbar>
      </AppBar>
    </Box>  
        </div>
    );
}

export default Header;
