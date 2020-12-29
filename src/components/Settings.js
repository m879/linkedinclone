import React from 'react';
import "./style.css";
 
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

const Settings= () => {
    return (
       <div id="home">
           <Paper elevation={3}>
               <div style={{display:'flex',padding:'10px 20px 0px 20px',background:'lavender'}}>
                  <Typography  variant="h6" component="h5" style={{padding:'10px',height:'30px'}}>Recent</Typography>
               </div>
               <Divider />

               <Grid >
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
               <Divider />
               <div>
                    <div style={{display:'flex',padding:'10px 20px 0px 20px',background:'lavender'}}>
                       <Typography  variant="h6" component="h5" style={{padding:'10px',height:'30px'}}>Earlier</Typography>
                    </div>
                    <Divider />
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
               </div>
               </Grid>
           </Paper>

       </div>
    );
}
 
export default Settings;