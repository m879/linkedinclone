import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';



import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';

import Slide from '@material-ui/core/Slide';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import EventIcon from '@material-ui/icons/Event';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { useNextVariants: true },
  
});

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dialog: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  dialogBar: {
    position: 'relative',
  },




  growbottom: {
    flexGrow: 0.5,
  },
  
  appBarbottom: {
    top: 'auto',
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
  },
  


}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Navigation(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const handleDrawerToggleclose = () => {
    setMobileOpen(!mobileOpen);
  };



const recent=["MIcrosoft Team","Google Developer","Codechef"]
const groups=["ZHCET AMU","Google Developer","Competitive Coding"]
const events=["MIcrosoft Team","Google Developer","Codechef"]
const hashtags=["#intership world","#scholarship","#Job finder"]

const drawer = (
    <div>
      <div className={classes.toolbar} />
        <IconButton id="sidebarclose"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggleclose}
            edge="start"
          > <ChevronLeftIcon  />
          </IconButton>

     
    <Card  variant="outlined" id='sidebarcard'>
        <CardActionArea >
          <CardMedia     style={{height:'100px'}}
            image="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
          />
        </CardActionArea>
        <div id="networkimg">
            <Avatar  alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" 
            style={{height:'100px',width:'100px',marginTop:'-50px'}}/>
        </div>
        <CardContent style={{textAlign:'center'}}>
          <Typography gutterBottom variant="h6" component="h5">Meraj Ahmed</Typography>
          <Typography variant="body2" color="textMuted" component="p">Computer Engineering</Typography>
        </CardContent>
        <CardActions style={{textAlign:'center'}}>
          <NavLink to="/profile" style={{textDecoration:'none'}}>
              <Button  color="primary" size="small">View Profile</Button>
          </NavLink>
          <NavLink to="/settings" style={{textDecoration:'none'}}>
              <Button  color="primary" size="small">Settings</Button>
          </NavLink>
        </CardActions>
    </Card>



    <Card  variant="outlined" style={{margin:'10px',paddingBottom:'30px',marginTop:'30px'}}>
        <CardContent >
          <Typography variant="h6" color="textPrimary" component="h6">Recent</Typography>
          <div>
          {
              recent.map((row) => (
                <a href="#">
                  <Typography variant="body2" color="textMuted" component="p">{row}</Typography>
                </a>
              ))
          }
          </div>
        </CardContent>
        <Divider/>
        <CardContent >
          <Typography variant="h6" color="textMuted" component="p">Groups</Typography>
          <div>
          {
              groups.map((row) => (
                <a href="#">
                  <Typography variant="body2" color="textMuted" component="p">{row}</Typography>
                </a>
              ))
          }
          </div>
        </CardContent>
        <Divider/>
        <CardContent >
          <Typography variant="h6" color="textMuted" component="p">Events</Typography>
          <div>
          {
              events.map((row) => (
                <a href="#">
                <Typography variant="body2" color="textMuted" component="p">{row}</Typography>
                </a> 
              ))
          }
          </div>
        </CardContent>
        <Divider/>
        <CardContent >
          <Typography variant="h6" color="textMuted" component="p">Followed Hashtags</Typography>
          <div>
          {
              hashtags.map((row) => (
                <a href="#">
                  <Typography variant="body2" color="textMuted" component="p">{row}</Typography>
                </a>
              ))
          }
          </div>
        </CardContent>
        <Divider/>

        <CardActions style={{textAlign:'center'}}>
              <Button variant="outlined" color="primary" size="small">Discover more</Button>
        </CardActions>
    </Card>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const menuId = 'primary-search-account-menu';

  const [anchorEl, setAnchorEl] = React.useState(null);


  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}  onClose={handleMobileMenuClose}  
    >
      <MenuItem onClick={handleClickOpenDialog} >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <NavLink to="/profile" style={{textDecoration:'none',color:'white'}}>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      </NavLink>
    </Menu>
  );


  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const [secondary, setSecondary] = React.useState(false);


  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


// FOR MENu
const [age, setAge] = React.useState('');
const handleChangeinput = (event) => {
  setAge(event.target.value);
};
// FOR COLLAPSE
const [checked, setChecked] = React.useState(false);
const toggledown= () => {
setChecked((prev) => !prev);
};


  return (
    <div className={classes.root}>
        {/* <ThemeProvider theme={darkTheme}> */}
      {/* <CssBaseline /> */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
        <Avatar  src="https://cdn.pixabay.com/photo/2016/03/12/21/05/boy-1252771_960_720.jpg" />
            {/* <MenuIcon /> */}
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>  <SearchIcon /></div>
            <InputBase  placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {/* <IconButton color="inherit">
                <NavLink to="/messages" ><ChatIcon style={{color:'white'}}/></NavLink>
          </IconButton> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
        
            <Dialog  fullScreen={fullScreen}   open={openDialog} onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title">
                <div style={{display:"flex"}}>
                    <DialogTitle id="responsive-dialog-title">{"Create a post"}</DialogTitle>
                  <div style={{marginLeft:'auto',marginTop:'10px',marginRight:'5%'}}>
                    <IconButton onClick={handleCloseDialog}  edge="end"><CloseIcon/></IconButton>
                  </div>
                </div>
              <DialogContent  dividers>
                  <Grid>
                      <List>
                      <ListItem style={{width:'60%'}}>
                          <ListItemAvatar>
                             <Avatar  src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg" />
                           </ListItemAvatar>
                          <ListItemText primary= "Meraj"secondary="Student"/>
                              <FormControl >
                              <Select  displayEmpty value={age}  onChange={handleChangeinput}>
                              <MenuItem value="" disabled>Public</MenuItem>
                                <MenuItem value={20}>Connection</MenuItem>
                                <MenuItem value={30}>Group members</MenuItem>
                              </Select>
                          </FormControl>
                      </ListItem>
                      </List>
                  </Grid>
                  <Editor
                      placeholder="What do you want to talk now?"
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                      }}
                  />
               
                  <Grid container style={{marginTop:'50px'}}>
                    <Grid style={{width:'100%',display:'flex'}}>
                        <div>
                          <IconButton onClick={toggledown}  edge="end"><AddIcon/></IconButton>
                          <IconButton   edge="end"><ImageIcon /></IconButton>
                          <IconButton   edge="end"><VideocamIcon/></IconButton>
                          <IconButton   edge="end"><EventIcon/></IconButton>
                        </div>
                        <div style={{marginLeft:'auto'}}>
                          <Button   style={{borderRadius:'20px'}}
                          color="primary"  edge="end" variant="contained">Post</Button>
                        </div>
                    </Grid>
                  <Collapse in={checked} Grid style={{width:'100%'}}>
                      <Grid container style={{marginTop:'30px'}}>
                          <Grid lg={6} xs={6}>
                              <div style={{textAlign:'center'}}>
                              <Button   style={{borderRadius:'20px'}}   
                              color="primary"  edge="end" variant="outlined">Celebrate an occassion</Button>
                              </div>
                          </Grid>
                          <Grid lg={6} xs={6}>
                              <div style={{textAlign:'center'}}>
                              <Button   style={{borderRadius:'20px'}}
                                color="primary"  edge="end" variant="outlined">Share that you're hiring</Button>
                              </div>
                          </Grid>
                      </Grid>
                      <Grid container style={{marginTop:'30px',marginBottom:'30px'}}>
                          <Grid lg={6} xs={6}>
                              <div style={{textAlign:'center'}}>
                              <Button   style={{borderRadius:'20px'}}   
                              color="primary"  edge="end" variant="outlined">Find an expert</Button>
                              </div>
                          </Grid>
                          <Grid lg={6} xs={6}>
                              <div style={{textAlign:'center'}}>
                              <Button   style={{borderRadius:'20px'}}
                                color="primary"  edge="end" variant="outlined">Create a poll</Button>
                              </div>
                          </Grid>
                      </Grid>
                  </Collapse>
                </Grid>
              </DialogContent>
           </Dialog>



          </div>
          <IconButton  edge="end"   color="inherit">
                <NavLink to="/messages" ><ChatIcon style={{color:'white'}}/></NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
            variant="permanent"  open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} /> 
      </main>


    <AppBar position="fixed" color="primary" className={classes.appBarbottom}>
    
        <BottomNavigation value={value} onChange={handleChange} style={{paddingLeft:'10px',paddingRight:'10px'}}>
            {/* <NavLink to="/" style={{textDecoration:'none'}}> */}
            <BottomNavigationAction   label="Home"            value="recents"   
                style={{width:'20%!important'}} 
                icon={<NavLink to="/" style={{textDecoration:'none',color:"none"}}> <HomeIcon/></NavLink>} />
            {/* </NavLink> */}
            {/* <NavLink to="/network" style={{textDecoration:'none'}}> */}
                <BottomNavigationAction   label="Network"         value="favorites" 
                style={{width:'20%!important'}} icon={<NavLink to="/network" style={{textDecoration:'none'}}><GroupIcon /></NavLink>} />
            {/* </NavLink> */}
            <BottomNavigationAction  label="Post"     value="nearby"    onClick={handleClickOpenDialog}
                style={{width:'20%!important'}} icon={<PostAddIcon/>} />
            {/* <NavLink to="/notification" style={{textDecoration:'none'}}> */}
                <BottomNavigationAction   label="Notifications"   value="folder"    
                style={{width:'20%!important'}} icon={<NavLink to="/notification" style={{textDecoration:'none'}}><NotificationsIcon/> </NavLink>} />
            {/* </NavLink> */}
            {/* <NavLink to="/jobs" style={{textDecoration:'none'}}> */}
                <BottomNavigationAction   label="Jobs"            value="jobs"      
                style={{width:'20%!important'}} icon={<NavLink to="/jobs" style={{textDecoration:'none'}}><WorkIcon/></NavLink>} />
            {/* </NavLink> */}
        </BottomNavigation>

      </AppBar>


      
      {/* </ThemeProvider> */}
    </div>
  );
}

export default Navigation;