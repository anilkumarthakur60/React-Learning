import * as React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, CardContent } from '@mui/material';

const drawerWidth = 240;


function BackendLayout(props) {

    const drawerWidth = 240;

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const navItemsData = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Login',
            path: '/login'
        },
        {
            name: 'Register',
            path: '/register'
        },
        {
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            name: 'Posts',
            path: '/dashboard/posts'
        }
    ]

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>

                <NavLink to="/" underline="none" component={ListItemButton}>
                    <ListItem disablePadding>
                        <ListItemText primary="Home" />
                    </ListItem>
                </NavLink>


            </List>
        </Box>
    );


    return (
        <>
            <Box sx={{ bg: 'primary.main' }}>
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>

                        {navItemsData.map((item, index) => {
                            return (
                                <NavLink key={index} to={item.path}>
                                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        <Button sx={{ color: '#fff' }}>
                                            {item.name}
                                        </Button>
                                    </Box>
                                </NavLink>
                            )
                        })}

                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>


                <Box component="main" sx={{ mt: 1 }}>

                    <Toolbar />
                    <Card raised>
                        <CardContent>

                            <Outlet />
                        </CardContent>
                    </Card>

                </Box>
            </Box>

        </>
    );
}


export default BackendLayout


