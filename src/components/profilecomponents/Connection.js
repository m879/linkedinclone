import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';



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

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';


import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Collapse from '@material-ui/core/Collapse';


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



const Connections= () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [checked, setChecked] = React.useState(false);

    const handleChangeinput = () => {
      setChecked((prev) => !prev);
    };

    return (
       <div id="home">
           <Grid container>
               <Grid lg={8} xs={12}>
                    <Paper elevation={3} style={{margin:'10px 10px 10px 10px'}} >
                        <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>Connections</Typography>
                        </div> 
                        <Grid container style={{paddingTop:'5px'}}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem style={{width:'100%'}} >
                                    <Grid container>
                                        <Grid lg={3} xs={3} style={{textAlign:'center'}}>
                                            <ListItemText  primary= "Sort by"/>
                                        </Grid>
                                        <Grid lg={2} xs={2}>                                        
                                            <FormControl >
                                                <Select  displayEmpty value={age}  onChange={handleChange}>
                                                <MenuItem value="" disabled>Recently added</MenuItem>
                                                  <MenuItem value={20}>First name</MenuItem>
                                                  <MenuItem value={30}>Last name</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                                        <IconButton edge="end" onClick={handleChangeinput}><SearchIcon/></IconButton>
                                        <IconButton edge="end"><FilterListIcon/></IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Collapse in={checked}>
                                    <ListItem>
                                    <TextField label="Search by name"   fullWidth  style={{margin:'20px'}} 
                                       variant="outlined" id="standard-size-small"  size="small" />
                                    </ListItem>
                                </Collapse>
                            </List>
                        </Grid>

                        <Divider  style={{margin:'5px 0px 0px 0px',backgroundColor:'black'}}/>

                        <Grid>
                            <List component="nav" aria-label="main mailbox folders">
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

                                            {/* <ListItemAvatar> */}
                                               {/* <Avatar */}
                                                {/* // src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg" */}
                                            {/* //    /> */}
                                             {/* </ListItemAvatar> */}
                                            {/* <ListItemText  primary= {row.notifications} secondary="Student"/> */}
                                            <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                                                <NavLink to="/messages">
                                                    <IconButton edge="end"><ChatIcon/></IconButton>
                                                </NavLink>
                                                <IconButton edge="end"><MoreHorizIcon/></IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <Divider  style={{margin:'2px 0px 0px 0px'}}/>
                                        </div>
                                    ))
                                }
                            </List>
                        </Grid>
                    </Paper>
               </Grid>
               
               <Grid lg={4} xs={12}>
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

               </Grid>
           </Grid>
          
       </div>
    );
}
 
export default Connections;