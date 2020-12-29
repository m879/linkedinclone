import React from 'react';
import './style.css';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';



import CancelIcon from '@material-ui/icons/Cancel';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));





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






export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="home">
         <Grid container> 
               <Grid lg={8} xs={12}>
                    <Paper elevation={3} style={{margin:'10px 10px 10px 10px'}} >
                    <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>Manage invitations</Typography>
                           <div style={{marginLeft:'auto'}}>
                        <IconButton edge="end"><SettingsIcon/></IconButton>
                           </div>
                    </div> 
                    <AppBar position="static" color="primary" variant="outlined">
                      <Tabs 
                    centered
                      value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Received" {...a11yProps(0)} />
                        <Tab label="Sent" {...a11yProps(1)} />
                      </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} style={{width:'100%'}}>
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
                                        <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                                            <IconButton edge="end"><PersonAddIcon style={{color:'blue'}}/></IconButton>
                                            <IconButton edge="end"><CancelIcon color="secondary"/></IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider  style={{margin:'2px 0px 0px 0px'}}/>
                                    </div>
                                ))
                            }
                        </List>

                    </TabPanel>


                    <TabPanel value={value} index={1}>
                        <List component="nav" aria-label="main mailbox folders">
                            {
                                recent.map((row) => (
                                    <div>
                                    <ListItem style={{width:'100%'}} button>
                                        <div style={{width:'70%',display:'flex'}}>
                                        <ListItemAvatar style={{marginTop:'10px'}}>
                                           <Avatar
                                            src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
                                           />
                                         </ListItemAvatar>
                                        <ListItemText  primary= {row.notifications} 
                                        secondary="Aligarh Muslim University"/>

                                        </div>
                                        <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                                            <Button edge="end" size="small" variant="outlined">Withdraw</Button>
                                            {/* <IconButton edge="end"><MoreHorizIcon/></IconButton> */}
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider  style={{margin:'2px 0px 0px 0px'}}/>
                                    </div>
                                ))
                            }
                        </List>
                    </TabPanel>
                  
                        
                    </Paper>
               </Grid>
               
               
{/* LEFT SIDE PORTION */}


               <Grid lg={4} xs={12}>
                   <Paper elevation={3} style={{margin:'10px'}} >
                        <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                           <Typography  variant="h6" component="h5" 
                           style={{padding:'10px'}}>News</Typography>
                        </div> 
                    </Paper>
               </Grid>
           </Grid>
          













    </div>
  );
}