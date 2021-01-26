import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

import Profilestrength from './profilecomponents/Profilestrength';
import About from './profilecomponents/About';
import Dashboard from './profilecomponents/Dashboard';
import Skills from './profilecomponents/Skills';
import Interests from './profilecomponents/Interests';
import Activity from './profilecomponents/Activity';
import Personsuggested from './profilecomponents/Personsuggested';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Chip from '@material-ui/core/Chip';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreateIcon from '@material-ui/icons/Create';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


let recent=[
    {
       id:"1",
       notifications:"Mukesh Ambani"
    },
    {
        id:"2",
        notifications:"Bill Gates"
    },
    {
        id:"3",
        notifications:"Ratan Tata"
    },
    {
        id:"4",
        notifications:"Meraj"
    },
]



const Profile= () => {

// PROFILE EDIT
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    // FOR MENU
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClosemenu = () => {
      setAnchorEl(null);
    };

    return (
       <div id="home">
           <Grid container>
               <Grid lg={8} xs={12}>
                    <Paper elevation={3} style={{margin:'0px 10px 10px 10px'}} >
                    <Card  variant="outlined" style={{paddingBottom:'30px'}}>
                        <CardActionArea >
                          <CardMedia     style={{height:'150px'}}
                            image="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
                          />
                        </CardActionArea>
                        <div id="networkimg">
                            <Avatar  
                              src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg" 
                            style={{height:'100px',width:'100px',marginTop:'-50px'}}/>
                        </div>
                        <CardContent style={{textAlign:'center'}}>
                          <Typography gutterBottom variant="h6" component="h5">Meraj Ahmed</Typography>
                          <Typography variant="body2" color="textMuted" component="p">Computer Engineering</Typography>
                        </CardContent>
                        <CardActions style={{textAlign:'center'}}>
                          <NavLink to="/connections" style={{textDecoration:'none'}}>
                             <Button variant="outlined"  color="secondary" size="small"
                              endIcon={<ExpandMoreIcon/>}>Connection</Button>
                          </NavLink>
                            <Button variant="outlined"  color="secondary" size="small"
                            aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                              endIcon={<ExpandMoreIcon/>}>More</Button>                          
                        </CardActions>
                    </Card>
                    </Paper>



                    <Menu   id="simple-menu"   anchorEl={anchorEl}   keepMounted   open={Boolean(anchorEl)}   onClose={handleClosemenu} >
                      <MenuItem onClick={handleClickOpen}>Edit profile</MenuItem>
                      <MenuItem onClick={handleClosemenu}>Share profile</MenuItem>
                      <MenuItem onClick={handleClosemenu}>Add profile section</MenuItem>
                    </Menu>



                    <Dialog  fullScreen={fullScreen}  open={open}  onClose={handleClose}  aria-labelledby="responsive-dialog-title">
                        <div style={{display:"flex"}}>
                            <DialogTitle id="responsive-dialog-title">{"Edit profile page"}</DialogTitle>
                          <div style={{marginLeft:'auto',marginTop:'10px',marginRight:'5%'}}>
                            <IconButton onClick={handleClose}  edge="end"><HighlightOffIcon/></IconButton>
                          </div>
                        </div>
                      <DialogContent dividers>
                        <DialogContentText>
                          {/* Let Google help apps determine location. This means sending anonymous location data to */}
                          {/* Google, even when no apps are running. */}
                        </DialogContentText>
                        <Card  variant="outlined" style={{paddingBottom:'30px',width:'100%'}}>
                            <CardActionArea >
                              <CardMedia     style={{height:'150px'}}
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
                              <Button color="primary">Upload profile image</Button>
                              <Button color="primary">Upload preview image</Button>
                            </CardActions>
                        </Card>
                        <Grid container>
                            <Grid lg={6} xs={6}>
                                <TextField  margin="dense"  id="name"  label="First name*"  type="text"  style={{width:'90%'}}/>
                            </Grid>
                            <Grid lg={6} xs={6}>
                                  <TextField  margin="dense"  id="name"  label="Last name*"  type="text"  style={{width:'90%'}}/>
                            </Grid>
                        </Grid>
                        <TextField   margin="dense"  id="name"  label="Headlines"  type="text"  fullWidth/>
                        <TextField   margin="dense"  id="name"  label="Country/Region"  type="text"  fullWidth/>
                        <TextField   margin="dense"  id="name"  label="Location in the Country/Region"  type="text"  fullWidth/>
                        <TextField   margin="dense"  id="name"  label="Contact info"  type="text"  fullWidth/>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}  style={{borderRadius:'20px'}} variant="contained" color="primary" autoFocus>Save</Button>
                      </DialogActions>
                    </Dialog>





                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                      <Profilestrength/>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                      <Dashboard/>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                      <About/>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                      <Activity/>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                      <Skills/>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                          <Interests/>
                    </Paper>
               </Grid>


{/* LEFT PART OF PROFILE */}


               <Grid lg={4} xs={12}>

                    {/* <Paper elevation={3} style={{margin:'10px'}} > */}
                        {/* <div style={{padding:"10px",textAlign:'center'}}> */}
                        {/* <Button  color="primary" onClick={handleClickOpen}>Edit Profile</Button> */}
                        {/* </div>  */}
                        {/* <Divider/> */}
                        {/* <div style={{padding:"10px",textAlign:'center'}}> */}
                              {/* <Button  color="primary">Add profile in other languages</Button> */}
                        {/* </div>  */}
                    {/* </Paper> */}

                   <Personsuggested/>
                  
               </Grid>
           </Grid>
          
       </div>
    );
}
 
export default Profile;