import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function UserMenu(props) {
    const [anchorEl, setA] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    const user = props.user;
    console.log(user);
    if (user.user) {
        return (
            <div>
                <Button
                onClick={handleClick}
                >
                    
                </Button>
            </div>
        )
    }

}