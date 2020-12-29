import React from 'react';
import './style.css';


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


export default function Interests() {

  return (
      <div>
            <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                   <Typography  variant="h6" component="h5" 
                   style={{padding:'0.625rem'}}>People also viewed</Typography>
                </div> 
                <Grid container style={{marginTop:'30px'}}>
                    <List component="nav" aria-label="main mailbox folders">
                        {
                            recent.map((row) => (
                                <ListItem style={{width:'100%'}} button>
                                    <ListItemAvatar>
                                       <Avatar
                                        src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
                                       />
                                     </ListItemAvatar>
                                    <ListItemText 
                                    primary= {row.notifications}
                                    secondary="Student"/>
                                    <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                                        <IconButton edge="end"><GroupAddIcon/></IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                              ))
                        }
                    </List>
                </Grid>
                <div style={{textAlign:'center',padding:"20px"}}>
                       <Divider style={{marginBottom:'20px'}}/>
                        <Button variant="outlined" color="primary" 
                         startIcon={<ExpandMoreIcon />}>See more</Button>
                </div>
            </Paper>

            <Paper elevation={3} style={{margin:'30px 10px 10px 10px',position:'sticky',top:'100px'}} >
                <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                   <Typography  variant="h6" component="h5" 
                   style={{padding:'0.625rem'}}>People you may know</Typography>
                </div> 
                <Grid container style={{marginTop:'10px'}}>
                    <List component="nav" aria-label="main mailbox folders">
                        {
                            recent.map((row) => (
                                <ListItem button>
                                    <ListItemAvatar>
                                       <Avatar
                                        src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
                                       />
                                     </ListItemAvatar>
                                    <ListItemText 
                                    primary= {row.notifications}
                                    secondary="Engineer"/>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end"><GroupAddIcon/></IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                              ))
                        }
                    </List>
                </Grid>
                <div style={{textAlign:'center',padding:"10px"}}>
                       <Divider style={{marginBottom:'20px'}}/>
                        <Button variant="outlined" color="primary" 
                         startIcon={<ExpandMoreIcon />}>See more</Button>
                </div>
            </Paper>
      </div>
    
  );
}