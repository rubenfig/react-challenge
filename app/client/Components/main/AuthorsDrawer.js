import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  useTheme
} from '@material-ui/core'
import React from 'react'
import PersonIcon from '@material-ui/icons/Person'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerToolbar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))


function AuthorsDrawer (props) {
  const {authors, onAuthorSelect} = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const classes = useStyles()
  const theme = useTheme()

  /**
   * open and close drawer
   */
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar className={classes.drawerToolbar}>
        <Typography variant="h6" noWrap>
          Authors
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button key="All" onClick={() => onAuthorSelect(null)}>
          <ListItemText primary="All" />
        </ListItem>
        {authors.map((author) => (
          <ListItem button
                    key={author.id}
                    onClick={() =>
                      onAuthorSelect(author.id)} >
            <ListItemText primary={`${author.firstName} ${author.lastName}`}/>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <PersonIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Publications demo
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="authors list">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default AuthorsDrawer
