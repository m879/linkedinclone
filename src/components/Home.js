import React, { useState } from 'react';
import './style.css';

import PostCard from './cards/PostsCard';
import Postdata from './data/Postdata.json';
import Statusdata from './data/Statusdata.json';
import Newsdata from './data/Newsdata.json';
import Personsuggested from './data/Suggestedperson.json';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';


// https://cdn.pixabay.com/photo/2016/11/14/04/57/young-1822656_960_720.jpg
// https://cdn.pixabay.com/photo/2015/01/15/12/46/model-600225_960_720.jpg
// https://cdn.pixabay.com/photo/2016/11/13/12/22/woman-1820868_960_720.jpg
// https://cdn.pixabay.com/photo/2016/03/23/08/34/beautiful-1274360_960_720.jpg
// https://cdn.pixabay.com/photo/2019/04/03/18/11/girl-4100999_960_720.jpg

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));



const Home = () => {

    const classes = useStyles();

    // FOR IMAGE INPUT
    const [file, setFile] = useState(null);
    const fileHandler = event => {
      console.log(event.target.files[0]);
      let reader = new FileReader();
      reader.onload = function(e) {
        setFile(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    };
    //TO GET USER INPUT
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const handleFirstNameChange = ({ target }) => {
      setFirstName(target.value);
    };
    const handleLastNameChange = ({ target }) => {
      setLastName(target.value);
    };
   //TO GET USER INPUT ON CLICKING BUTTON
    const handleClicksubmit = () => {
      console.log(first_name);
      console.log(last_name);
      Postdata.data.push({        //add the employee
          username:"Rehan Akram",
          work:"Student",
          img:file,
          blogText:first_name,  
          blogDatail:last_name,
      });
      handleClose();
    };

    //FOR MODAL WORK
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
                    <ListItemSecondaryAction>
                        <FormControl style={{marginRight:'5%'}}>
                            <Select  displayEmpty value={age}  onChange={handleChange}>
                            <MenuItem value="" disabled>Public</MenuItem>
                              <MenuItem value={20}>Connection</MenuItem>
                              <MenuItem value={30}>Group members</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItemSecondaryAction>
                </ListItem>
                </List>
            </Grid>
            <Grid style={{marginTop:'50px'}}>
                {/* <Alertmsg text="Uploaded Successfully"/> */}
            <TextField label="Write short discription"  style={{width:'100%'}} 
              onChange={handleFirstNameChange}
              variant="outlined" id="standard-size-small"  size="small" />
            <TextareaAutosize  aria-label="minimum height"   onChange={handleLastNameChange}
            style={{border:'1px solid rgba(0, 0, 0, 0.23)',width:'100%',outline:'none',marginTop:'20px'}}
            rowsMin={5} placeholder="What do you want to talk now?" />

            </Grid>
            {/* <Editor */}
                {/* // placeholder="What do you want to talk now?" */}
                {/* // toolbarClassName="toolbarClassName" */}
                {/* // wrapperClassName="wrapperClassName" */}
                {/* // editorClassName="editorClassName" */}
                {/* // toolbar={{ */}
                {/* //   inline: { inDropdown: true }, */}
                {/* //   list: { inDropdown: true }, */}
                {/* //   textAlign: { inDropdown: true }, */}
                {/* //   link: { inDropdown: true }, */}
                {/* //   history: { inDropdown: true }, */}
                {/* // }} */}
            {/* // /> */}
         
            <Grid container style={{marginTop:'50px'}}>
              <Grid style={{width:'100%',display:'flex'}}>
                  <div>
                    <IconButton onClick={handleChangeinput}  edge="end"><AddIcon/></IconButton>
                    <input accept="image/*" onChange={fileHandler} className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                      <IconButton color="primary" aria-label="upload picture" component="span">
                      <ImageIcon />
                      </IconButton>
                    </label>
                    {/* <IconButton onClick={handleClose}  edge="end"><ImageIcon /></IconButton> */}
                    <IconButton onClick={handleClose}  edge="end"><VideocamIcon/></IconButton>
                    <IconButton onClick={handleClose}  edge="end"><EventIcon/></IconButton>
                  </div>
                  <div style={{marginLeft:'auto'}}>
                    <Button  style={{borderRadius:'20px'}}
                   onClick={handleClicksubmit}
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
                            <Badge color="secondary"     variant="dot"    badgeContent=" " 
                            anchorOrigin={{  vertical: 'bottom',  horizontal: 'right',}}
                            >
                            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"  
                            style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>
                            </Badge>                            
                            {
                                Statusdata.status.map((row) => (
                                    <img src={row.img}
                                    style={{height:'70px',width:'70px',borderRadius:'100%',border:"2px dotted blue",marginLeft:'20px'}}/>
                                ))
                            }
                            </div>
                        </Grid>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px'}} >
                        <Grid container style={{paddingTop:'10px',paddingBottom:'10px'}}>
                            <TextField label="Start a post"   fullWidth  style={{margin:'20px'}} 
                            onClick={handleClickOpen}   disabled    variant="outlined" id="postinput"  size="small" />
                          <Grid container  >
                              <Grid lg={4} xs={4} style={{textAlign:'center'}}>
                                  <Button   onClick={handleClickOpen}  color="primary"  size="small"  startIcon={<ImageIcon />}>Photo</Button>
                              </Grid>
                              <Grid lg={4} xs={4} style={{textAlign:'center'}}>
                                  <Button onClick={handleClickOpen}   color="primary"  size="small"  startIcon={<VideocamIcon/>}>Video</Button>
                              </Grid>
                              <Grid lg={4} xs={4} style={{textAlign:'center'}}>
                                  <Button  onClick={handleClickOpen}   color="primary"  size="small"  startIcon={<EventIcon/>}>Event</Button>
                              </Grid>
                          </Grid>
                        </Grid>
                    </Paper>
                    <Grid>
                    {
                        Postdata.data.map((row) => (
                            <PostCard 
                            username={row.username}    work={row.work}
                            img={row.img}
                            shortdetail={row.blogText}    detail={row.blogDatail}
                            />
                          ))
                    }
                    </Grid>
               </Grid>
               
               <Grid lg={4}  id="news">
                   <Paper elevation={3} style={{margin:'10px'}} >
                        <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>News</Typography>
                        </div> 
                        <Grid container >
                            <List component="nav" aria-label="main mailbox folders">
                                {
                                    Newsdata.news.map((row) => (
                                        <ListItem button>
                                            <ListItemIcon><InboxIcon style={{color:'blue'}}/></ListItemIcon>
                                            <ListItemText primary= {row.heading}/>
                                        </ListItem>
                                      ))
                                }
                            </List>
                        </Grid>
                    </Paper>

                    <Paper elevation={3} style={{margin:'30px 10px 10px 10px',position:'sticky',top:'100px'}} >
                        <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>Add to your feed</Typography>
                        </div> 
                        <Grid container>
                            <List component="nav" aria-label="main mailbox folders">
                                {
                                    Personsuggested.person.map((row) => (
                                        <ListItem button>
                                            <ListItemAvatar><Avatar  src={row.img}/></ListItemAvatar>
                                            <ListItemText   primary= {row.username}  secondary={row.work}/>
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end"><PersonAddIcon/></IconButton>
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