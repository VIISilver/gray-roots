import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import AppBar from 'material-ui/AppBar';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => (
    <AppBar
        style={{backgroundColor: '#777777'}}
        title='Menu'        
        iconElementLeft={
            <IconMenu                
                iconButtonElement={<IconButton><MoreVertIcon color={'white'} style={{backgroundColor: '#777777'}} /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <Link to='/about' style={{ textDecoration: 'none' }}><MenuItem primaryText='About' /></Link>
            </IconMenu>
        } />
);

export default Nav;