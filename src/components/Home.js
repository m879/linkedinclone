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
// import Button from '@material-ui/core/Button';


import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';


// import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

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



const Home = () => {


  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


// FOR MENu
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

     
// FOR COLLAPSE
const [checked, setChecked] = React.useState(false);
const handleChangeinput = () => {
  setChecked((prev) => !prev);
};

    return (
       <div id="home">


    <Dialog  fullScreen={fullScreen}  open={open}  onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
            <div style={{display:"flex"}}>
                <DialogTitle id="responsive-dialog-title">{"Create a post"}</DialogTitle>
              <div style={{marginLeft:'auto',marginTop:'10px',marginRight:'5%'}}>
                <IconButton onClick={handleClose}  edge="end"><CloseIcon/></IconButton>
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
                        <Select  displayEmpty value={age}  onChange={handleChange}>
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
                    <IconButton onClick={handleChangeinput}  edge="end"><AddIcon/></IconButton>
                    <IconButton onClick={handleClose}  edge="end"><ImageIcon /></IconButton>
                    <IconButton onClick={handleClose}  edge="end"><VideocamIcon/></IconButton>
                    <IconButton onClick={handleClose}  edge="end"><EventIcon/></IconButton>
                  </div>
                  <div style={{marginLeft:'auto'}}>
                    <Button onClick={handleClose}  style={{borderRadius:'20px'}}
                    color="primary"  edge="end" variant="contained">Post</Button>
                  </div>
              </Grid>
            <Collapse in={checked} Grid style={{width:'100%'}}>
                <Grid container style={{marginTop:'30px'}}>
                    <Grid lg={6} xs={6}>
                        <div style={{textAlign:'center'}}>
                        <Button onClick={handleClose}  style={{borderRadius:'20px'}}   
                        color="primary"  edge="end" variant="outlined">Celebrate an occassion</Button>
                        </div>
                    </Grid>
                    <Grid lg={6} xs={6}>
                        <div style={{textAlign:'center'}}>
                        <Button onClick={handleClose}  style={{borderRadius:'20px'}}
                          color="primary"  edge="end" variant="outlined">Share that you're hiring</Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container style={{marginTop:'30px',marginBottom:'30px'}}>
                    <Grid lg={6} xs={6}>
                        <div style={{textAlign:'center'}}>
                        <Button onClick={handleClose}  style={{borderRadius:'20px'}}   
                        color="primary"  edge="end" variant="outlined">Find an expert</Button>
                        </div>
                    </Grid>
                    <Grid lg={6} xs={6}>
                        <div style={{textAlign:'center'}}>
                        <Button onClick={handleClose}  style={{borderRadius:'20px'}}
                          color="primary"  edge="end" variant="outlined">Create a poll</Button>
                        </div>
                    </Grid>
                </Grid>
            </Collapse>
          </Grid>
        </DialogContent>
    </Dialog>









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
                        <Grid container style={{paddingTop:'10px',paddingBottom:'10px'}}>
                            <TextField label="Start a post"   fullWidth  style={{margin:'20px'}} 
                            onClick={handleClickOpen}   disabled    variant="outlined" id="postinput"  size="small" />
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
                    {/* <Divider  style={{margin:'30px 10px 10px 30px'}}/> */}
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
 
export default Home;