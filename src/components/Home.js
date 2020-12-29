import React from 'react';
import './style.css';
// import PostCard from './cards/PostsCard';

import PostCard from './cards/PostsCard';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';


import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import Badge from '@material-ui/core/Badge';

import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventIcon from '@material-ui/icons/Event';
import CreateIcon from '@material-ui/icons/Create';

// import Divider from '@material-ui/core/Divider';


let recent=[
    {
       id:"1",
       notifications:"You have a new connection"
    },
    {
        id:"2",
        notifications:"You have a new connection"
    },
    {
        id:"3",
        notifications:"You have a new connection"
    },
    {
        id:"4",
        notifications:"You have a new connection"
    },
    {
        id:"5",
        notifications:"You have a new connection"
    },
    {
        id:"6",
        notifications:"You have a new connection"
    }
]



const home = () => {
    return (
       <div id="home">
           <Grid container>
               <Grid lg={8} xs={12}>
                    <Paper elevation={3} style={{margin:'10px'}} >
                        <Grid container style={{paddingTop:'20px',paddingBottom:'3px'}}>
                            <div style={{display:'flex',overflow:'scroll',overflowY:'hidden',paddingBottom:'20px'}}>
                            <Badge color="secondary" 
                            variant="dot"
                            badgeContent=" " 
                            // style={{height:'20px',width:'20px'}}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                              }}
                            >
                                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"  
                                style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>
                            </Badge>
                            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"  
                                style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>

                            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"  
                                style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>

                            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"  
                                style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>

                            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"  
                                style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>
                            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"  
                                style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>
                            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"  
                                style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>


                            </div>
                        </Grid>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                        <Grid container style={{paddingTop:'20px',paddingBottom:'30px'}}>
                            <TextField label="Start a post"   fullWidth  style={{margin:'20px'}} 
                               disabled    variant="outlined" id="standard-size-small"  size="small" />
                          <Grid container  >
                              <Grid lg={4} xs={4} style={{textAlign:'center'}}>
                                  <Button    color="primary"  size="small"  startIcon={<ImageIcon />}>Photo</Button>
                              </Grid>
                              <Grid lg={4} xs={4} style={{textAlign:'center'}}>
                                  <Button   color="primary"  size="small"  startIcon={<VideocamIcon/>}>Video</Button>
                              </Grid>
                              <Grid lg={4} xs={4} style={{textAlign:'center'}}>
                                  <Button    color="primary"  size="small"  startIcon={<EventIcon/>}>Event</Button>
                              </Grid>
                          </Grid>
                        </Grid>
                    </Paper>
                    <Divider  style={{margin:'30px 10px 10px 30px'}}/>
                    <Grid>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </Grid>

              


               </Grid>
               
               <Grid lg={4}  id="news">
                   <Paper elevation={3} style={{margin:'10px'}} >
                        <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>News</Typography>
                        </div> 
                        <Grid container style={{marginTop:'30px'}}>
                            <List component="nav" aria-label="main mailbox folders">
                                {
                                    recent.map((row) => (
                                        <ListItem button>
                                            <ListItemIcon><InboxIcon /></ListItemIcon>
                                            <ListItemText primary= {row.notifications}/>
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="delete"><MoreHorizIcon/></IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                      ))
                                }
                            </List>
                        </Grid>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px',position:'sticky',top:'100px'}} >
                        <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>News</Typography>
                        </div> 
                        <Grid container style={{marginTop:'30px'}}>
                            <List component="nav" aria-label="main mailbox folders">
                                {
                                    recent.map((row) => (
                                        <ListItem button>
                                            <ListItemIcon><InboxIcon /></ListItemIcon>
                                            <ListItemText primary= {row.notifications}/>
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="delete"><MoreHorizIcon/></IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                      ))
                                }
                            </List>
                        </Grid>
                    </Paper>



               </Grid>
           </Grid>
          
       </div>
    );
}
 
export default home;