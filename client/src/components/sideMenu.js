import React from 'react';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { makeStyles, Drawer, Button, List, ListItem, ListItemText } from "@material-ui/core/";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  list: {
    width: 100
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/">
          <ListItem>
            Home
            <ListItemText />
          </ListItem>
        </Link>
        <ListItem>
          Favourites
          <ListItemText />
        </ListItem>
        <ListItem>
          <Link to="/cities">Cities</Link>
          <ListItemText />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <div className="sideMenu">
        <Button onClick={toggleDrawer("right", true)}>
            <FontAwesomeIcon icon={faBars} className="menu" />
        </Button>
      </div>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}>
        {sideList("right")}
      </Drawer>
    </div>
  );
}