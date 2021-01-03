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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


let recent=[
    {
       id:"1",
       img:'https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_960_720.jpg',
       notifications:"Adolf"
    },
    {
        id:"2",
        img:'https://cdn.pixabay.com/photo/2014/07/31/23/49/guitarist-407212_960_720.jpg',
        notifications:"Harry"
    },
    {
        id:"3",
        img:'https://cdn.pixabay.com/photo/2016/01/19/18/04/man-1150058_960_720.jpg',
        notifications:"Sanjay Kumar"
    },
    {
        id:"4",
        img:'https://cdn.pixabay.com/photo/2016/11/29/01/34/fashion-1866574_960_720.jpg',
        notifications:"John Peter"
    },
    {
        id:"5",
        img:'https://cdn.pixabay.com/photo/2016/11/23/17/31/bench-1853961_960_720.jpg',
        notifications:"Albert Row"
    },
]


export default function Interests() {

  return (
      <div>
            <Paper elevation={3} style={{margin:'0px 10px 10px 10px'}} >
                <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                   <Typography  variant="h6" component="h5" 
                   style={{padding:'0.625rem'}}>People also viewed</Typography>
                </div> 
                <Grid container>
                    <List component="nav" aria-label="main mailbox folders">
                        {
                            recent.map((row) => (
                                <ListItem style={{width:'100%'}} button>
                                    <ListItemAvatar><Avatar  src={row.img} /></ListItemAvatar>
                                    <ListItemText 
                                    primary= {row.notifications}
                                    secondary="Student"/>
                                    <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                                        <IconButton edge="end"><PersonAddIcon/></IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                              ))
                        }
                    </List>
                </Grid>
                <div style={{textAlign:'center',padding:"20px"}}>
                       <Divider style={{marginBottom:'20px'}}/>
                        <Button variant="outlined" color="primary"  startIcon={<ExpandMoreIcon />}>See more</Button>
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
                                    <ListItemAvatar><Avatar  src={row.img} /></ListItemAvatar>
                                    <ListItemText 
                                    primary= {row.notifications}
                                    secondary="Engineer"/>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end"><PersonAddIcon/></IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                              ))
                        }
                    </List>
                </Grid>
                <div style={{textAlign:'center',padding:"10px"}}>
                    <Divider style={{marginBottom:'20px'}}/>
                    <Button variant="outlined" color="primary"  startIcon={<ExpandMoreIcon />}>See more</Button>
                </div>
            </Paper>
      </div>
    
  );
}