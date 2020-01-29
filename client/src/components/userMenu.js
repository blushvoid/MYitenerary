import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Logout from './logout';

export default function UserMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const user = props.user;
    console.log(user)
    if (user.user) {
        return (
            <group>
            <Button onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true" borders="round">
                <FontAwesomeIcon icon={faUser} />
            </Button>
        <Menu id="simple-menu" onClose={handleClose} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
          <MenuItem onClick={handleClose}>
            <Link to="/">
              <Logout />
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/favourites">Favourites</Link>
          </MenuItem>
        </Menu>
      </group>
    );
  } else {
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <FontAwesomeIcon icon={faUser} />
        </Button>
        <Menu id="simple-menu" onClose={handleClose} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
          <Link to="/login">
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Link>
          <Link to="/newaccount">
            <MenuItem onClick={handleClose}>Create an Account</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

