import { AppBar, Toolbar, Typography, IconButton, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333', padding: '0.5rem' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Brand Name
        </Typography>
        {!isSmallScreen && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                backgroundColor: '#fff',
                padding: '0.5rem',
                borderRadius: '4px',
                marginRight: '0.5rem',
              }}
            />
            <IconButton type="submit" aria-label="search" sx={{ color: '#fff' }}>
              <SearchIcon />
            </IconButton>
          </Box>
        )}
        <IconButton edge="end" color="inherit" aria-label="user">
          <AccountCircle />
        </IconButton>
      </Toolbar>
      {isSmallScreen && (
        <Box sx={{ padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              backgroundColor: '#fff',
              padding: '0.5rem',
              borderRadius: '4px',
              flexGrow: 1,
            }}
          />
          <IconButton type="submit" aria-label="search" sx={{ color: '#fff' }}>
            <SearchIcon />
          </IconButton>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
