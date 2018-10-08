import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ListItem, ListItemText } from '@material-ui/core';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '97.5vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: '#61d9f1'
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    backgroundImage: 'linear-gradient(35deg, white, #ff3d6c)',
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundImage: `url(${'./bottom.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: '176vh auto',
  },
});

class Home extends React.Component {
  state = {
    anchor: 'left',
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer
        variant="permanent"
        style={{ backgroundImage: "url('bg.jpeg')" }}
        backgroundColor="red"
        classes={{
          paper: classes.drawerPaper, background: 'red',
        }}
        anchor={anchor}
      >
        <div className={classes.toolbar}>
          <List>
            <ListItem><ListItemText primary={<span style={{ color: '#FFF' }}>SmileBots</span>} /></ListItem>
          </List>
        </div>
       <Divider />
       <List>
            <ListItem><ListItemText primary="Profile" /></ListItem>
       </List>
       <List>
            <ListItem><ListItemText primary="SmileBots" /></ListItem>
       </List>
       <List>
            <ListItem><ListItemText primary="SmileBots" /></ListItem>
       </List>
      </Drawer>
    );

    
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                ..
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>{'You think water moves fast? You should see ice.'}</Typography>
            <div className={classes.myDiv}>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);