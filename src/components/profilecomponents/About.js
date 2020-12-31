import React from 'react';

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


import AddIcon from '@material-ui/icons/Add';

import Collapse from '@material-ui/core/Collapse';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },

    roottab: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
      },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
  }));





function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }


export default function About() {

    const classes = useStyles();    
    // FOR TAB WORK ie ABOUT ME
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // FOR DIALOG OPEN
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
          
    // FOR COLLAPSE
    const [checkedoverview, setCheckedoverview] = React.useState(false);
    const handleChangeinputoverview = () => {
      setCheckedoverview((prev) => !prev);
    };      
    // FOR COLLAPSE
    const [checkededucation, setCheckededucation] = React.useState(false);
    const handleChangeinputeducation = () => {
      setCheckededucation((prev) => !prev);
    };  
    // FOR COLLAPSE
    const [checkedwork, setCheckedwork] = React.useState(false);
    const handleChangeinputwork = () => {
      setCheckedwork((prev) => !prev);
    };  
    
    // FOR COLLAPSE
    const [checkedcontact, setCheckedcontact] = React.useState(false);
    const handleChangeinputcontact = () => {
      setCheckedcontact((prev) => !prev);
    };
   



  return (
    <div>

        <Dialog  fullScreen={fullScreen}  open={open}  onClose={handleClose}  aria-labelledby="responsive-dialog-title">
            <div style={{display:"flex"}}>
                <DialogTitle id="responsive-dialog-title">{"Edit about"}</DialogTitle>
              <div style={{marginLeft:'auto',marginTop:'10px',marginRight:'5%'}}>
                <IconButton onClick={handleClose}  edge="end"><HighlightOffIcon/></IconButton>
              </div>
            </div>
          <DialogContent dividers>
            <DialogContentText>
              Add you present status either student or employee.Add you education and work 
              experiences.Add your contact info to know other about you.
            </DialogContentText>
            <Grid>
              <List component="nav" aria-label="main mailbox folders">
                  <ListItem button onClick={handleChangeinputoverview} style={{border:'1px solid gray',marginTop:'20px'}}>
                    <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                    <ListItemText primary="Overview" />
                    <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                        <IconButton edge="end"><AddCircleIcon/></IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Collapse in={checkedoverview}>
                      <Grid container>
                          <Grid lg={6} xs={6}>
                                <TextField  margin="dense"  id="name"  label="Present Position"  type="text"  style={{width:'90%'}}/>
                          </Grid>
                          <Grid lg={6} xs={6}>
                                <TextField  margin="dense"  id="name"  label="Place"  type="text"  style={{width:'90%'}}/>
                          </Grid>
                      </Grid>
                  </Collapse>

                  <ListItem button onClick={handleChangeinputeducation} style={{border:'1px solid gray',marginTop:'20px'}}>
                    <ListItemIcon>  <LocalLibraryIcon/></ListItemIcon>
                    <ListItemText primary="Education" />
                    <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                        <IconButton edge="end"><AddCircleIcon/></IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <Collapse in={checkededucation}>
                    <Grid container>
                      <Grid lg={6} xs={6}>
                            <TextField  margin="dense"  id="name"  label="Courses"  type="text"  style={{width:'90%'}}/>
                      </Grid>
                      <Grid lg={6} xs={6}>
                            <TextField  margin="dense"  id="name"  label="Year"  type="text"  style={{width:'90%'}}/>
                      </Grid>
                    </Grid>
                      <TextField  margin="dense"  id="name"  label="College"  type="text"  fullWidth/>
                  </Collapse>


                  <ListItem button onClick={handleChangeinputwork} style={{border:'1px solid gray',marginTop:'20px'}}>
                    <ListItemIcon><WorkIcon/></ListItemIcon>
                    <ListItemText primary="Work and Experiences" />
                    <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                        <IconButton edge="end"><AddCircleIcon/></IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <Collapse in={checkedwork}>
                    <Grid container>
                      <Grid lg={6} xs={6}>
                            <TextField  margin="dense"  id="name"  label="Occupations"  type="text"  style={{width:'90%'}}/>
                      </Grid>
                      <Grid lg={6} xs={6}>
                            <TextField  margin="dense"  id="name"  label="Year"  type="text"  style={{width:'90%'}}/>
                      </Grid>
                    </Grid>
                      <TextField  margin="dense"  id="name"  label="Company Name"  type="text"  fullWidth/>
                  </Collapse>

                  <ListItem button onClick={handleChangeinputcontact} style={{border:'1px solid gray',marginTop:'20px'}}>
                    <ListItemIcon><ContactsIcon /></ListItemIcon>
                    <ListItemText primary="Contact info" />
                    <ListItemSecondaryAction style={{marginLeft:'auto'}}>
                        <IconButton edge="end"><AddCircleIcon/></IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <Collapse in={checkedcontact}>
                    <Grid container>
                      <Grid lg={6} xs={6}>
                            <TextField  margin="dense"  id="name"  label="Email"  type="email"  style={{width:'90%'}}/>
                      </Grid>
                      <Grid lg={6} xs={6}>
                            <TextField  margin="dense"  id="name"  label="Website"  type="email"  style={{width:'90%'}}/>
                      </Grid>
                    </Grid>
                      <TextField  margin="dense"  id="name"  label="Address"  type="email"  fullWidth/>
                  </Collapse>

              </List>
            </Grid>
          </DialogContent>
          <DialogActions>
              <Button onClick={handleClose}  style={{borderRadius:'20px'}} variant="contained" color="primary" autoFocus>Save</Button>
          </DialogActions>
      </Dialog>




        <div style={{display:'flex',padding:'10px 20px 0px 20px',background:'lavender'}}>
            <Typography style={{padding:'10px',height:'30px'}} variant="h6" component="h5">About</Typography>
            <div style={{marginLeft:'auto'}}>
                <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}><AddIcon/></IconButton>
            </div>
        </div>
        <Divider />

            <div className={classes.roottab}>
                <Tabs   orientation="vertical"   variant="scrollable"
                  value={value}    onChange={handleChange}
                  aria-label="Vertical tabs example" className={classes.tabs}
                >
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Education" {...a11yProps(1)} />
                  <Tab label="Work and experience" {...a11yProps(2)} />
                  <Tab label="COntact info" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0} style={{height:'100%',overflow:'scroll',width:'100%',overflowX:'hidden'}}>
                    <List className={classes.root}>
                        <ListItem><ListItemAvatar><Avatar><LanguageIcon /></Avatar></ListItemAvatar>
                          <ListItemText 
                          primary="Undergraduate Computer Engineering" 
                          secondary="ZHCET,AMU" />
                        </ListItem>
                        <ListItem><ListItemAvatar><Avatar><LanguageIcon/></Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Work" secondary="Jan 7, 2014" />
                        </ListItem>
                    </List>
                </TabPanel>

                <TabPanel value={value} index={1} style={{height:'100%',overflow:'scroll',width:'100%',overflowX:'hidden'}}>
                    <List className={classes.root}>
                        <ListItem><ListItemAvatar><Avatar><LocalLibraryIcon/></Avatar></ListItemAvatar>
                          <ListItemText 
                          primary="Undergraduate Computer Engineering" 
                          secondary="ZHCET,AMU" />
                        </ListItem>
                        <ListItem><ListItemAvatar><Avatar><LocalLibraryIcon/> </Avatar>
                          </ListItemAvatar>
                          <ListItemText 
                          primary="Senior Secondary School" 
                          secondary="AMU" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar><Avatar><LocalLibraryIcon/></Avatar></ListItemAvatar>
                          <ListItemText 
                          primary="Primary Education" 
                          secondary={<a href="#">Midas school of Learning</a>} />
                        </ListItem>
                    </List>
                </TabPanel>
                        
                <TabPanel value={value} index={2} style={{height:'100%',overflow:'scroll',width:'100%',overflowX:'hidden'}}>
                    <List className={classes.root}>
                        <ListItem><ListItemAvatar><Avatar><WorkIcon/></Avatar></ListItemAvatar>
                          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                        </ListItem>
                        <ListItem><ListItemAvatar><Avatar><WorkIcon/></Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Work" secondary="Jan 7, 2014" />
                        </ListItem>
                    </List>
                </TabPanel>


                <TabPanel value={value} index={3} style={{height:'100%',overflow:'scroll',width:'100%',overflowX:'hidden'}}>
                    <List className={classes.root}>
                        <ListItem><ListItemAvatar>  <Avatar><ContactsIcon /></Avatar></ListItemAvatar>
                          <ListItemText 
                          primary="Website" 
                          secondary={<a href="https://m879.github.io/merajahmed.github.io/">merajahmed.live</a>} />
                        </ListItem>
                        <ListItem><ListItemAvatar><Avatar><ContactsIcon/></Avatar>
                          </ListItemAvatar>
                          <ListItemText 
                          primary="Instagram" 
                          secondary="Jan 7, 2014" />
                        </ListItem>
                    </List>
                </TabPanel>
        </div>
    </div>
    
  );
}