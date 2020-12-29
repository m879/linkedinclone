import React from 'react';
import './style.css';
// import PostCard from './PostsCard';

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


import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


// import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import Collapse from '@material-ui/core/Collapse';
// import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';

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
]



const Messages= () => {



    const [checked, setChecked] = React.useState(false);

    const handleChangeinput = () => {
      setChecked((prev) => !prev);
    };



    return (
       <div id="home">
           <Grid container>
                <Grid lg={4}  xs={12}>
                   <Paper elevation={3} style={{margin:'0px 10px 10px 10px'}} >
                        <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>Chats</Typography>
                            <div style={{marginLeft:'auto'}}>
                                <IconButton edge="end" onClick={handleChangeinput}><SearchIcon/></IconButton>
                                <IconButton edge="end"><SettingsIcon/></IconButton>
                            </div>
                           {/* <List> */}
                           {/* </List> */}
                        </div> 
                        <Grid container >
                        <List component="nav" aria-label="main mailbox folders">
                            <Collapse in={checked}>
                                    <ListItem>
                                    <TextField label="Search by name"   fullWidth  style={{margin:'0px 20px 0px 20px'}} 
                                       variant="outlined" id="standard-size-small"  size="small" />
                                    </ListItem>
                                    <Divider  style={{margin:'4px 0px 0px 0px'}}/>
                            </Collapse>

                            {
                                recent.map((row) => (
                                    <div>
                                    <ListItem style={{width:'100%'}} button>
                                        <div style={{width:'90%',display:'flex'}}>
                                        <ListItemAvatar style={{marginTop:'10px'}}>
                                           <Avatar
                                            src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
                                           />
                                         </ListItemAvatar>
                                        <ListItemText  primary= {row.notifications} 
                                        secondary="Aligarh Muslim University"/>

                                        </div>
                                        {/* <ListItemSecondaryAction style={{marginLeft:'auto'}}> */}
                                            {/* <IconButton edge="end"><PersonAddIcon style={{color:'blue'}}/></IconButton> */}
                                            {/* <IconButton edge="end"><CancelIcon color="secondary"/></IconButton> */}
                                        {/* </ListItemSecondaryAction> */}
                                    </ListItem>
                                    <Divider  style={{margin:'2px 0px 0px 0px'}}/>
                                    </div>
                                ))
                            }
                        </List>
                        </Grid>
                    </Paper>
               </Grid>

               <Grid lg={8} xs={12}>
                    <Paper elevation={3} style={{margin:'0px 10px 10px 10px'}} >
                        <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>News</Typography>
                            <div style={{marginLeft:'auto'}}>
                                    <IconButton edge="end"><MoreVertIcon/></IconButton>
                            </div>
                        </div> 

                        <Grid container style={{paddingTop:'20px',paddingBottom:'10px'}}>
                            <div style={{background:'red',height:'100%',width:'100%'}}>

                            </div>
                            <div style={{display:'flex',width:'100%',textAlign:'center',bottom:'10%',margin:'45% 10px 10px 10px'}} >
                            <Divider  style={{margin:'2px 0px 10px 0px'}}/>
                                <IconButton   edge="end" style={{top:'-5px'}}><AttachFileIcon/></IconButton>
                                <TextField label="Start a post"  style={{width:'85%',marginLeft:'10px'}} 
                                variant="outlined" id="standard-size-small"  size="small" />
                                <IconButton edge="end" style={{top:'-5px'}}><SendIcon/></IconButton>
                            </div>
                        </Grid>
                    </Paper>
               </Grid>
               
           </Grid>
          
       </div>
    );
}
 
export default Messages;