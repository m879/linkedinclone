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

import Collapse from '@material-ui/core/Collapse';



export default function Skills() {

    let jobsuggested=["Front end","Django Developer","Google Developer","Google web developer","Microsoft Engineer"]
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
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
    const [checked, setChecked] = React.useState(false);
    const handleChangeinput = () => {
      setChecked((prev) => !prev);
    };


  return (
      <div>

          <Dialog  fullScreen={fullScreen}  open={open}  onClose={handleClose}  aria-labelledby="responsive-dialog-title">
              <div style={{display:"flex"}}>
                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <div style={{marginLeft:'auto',marginTop:'10px',marginRight:'5%'}}>
                  <IconButton onClick={handleClose}  edge="end"><HighlightOffIcon/></IconButton>
                </div>
              </div>
              <DialogContent dividers>
                  <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                  </DialogContentText>
                  <Card  variant="outlined" style={{paddingBottom:'30px',width:'100%'}}>
                      <CardActionArea >
                        <CardMedia     style={{height:'150px'}}
                          image="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
                        />
                      </CardActionArea>
                      <div id="networkimg">
                          <Avatar  alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" 
                          style={{height:'100px',width:'100px',marginTop:'-50px'}}/>
                      </div>
                      <CardContent style={{textAlign:'center'}}>
                        <Typography gutterBottom variant="h6" component="h5">Meraj Ahmed</Typography>
                        <Typography variant="body2" color="textMuted" component="p">Computer Engineering</Typography>
                      </CardContent>
                      <CardActions style={{textAlign:'center'}}>
                        <Button>Click me</Button>
                      </CardActions>
                  </Card>
                  <TextField  autoFocus  margin="dense"  id="name"  label="Email Address"  type="email"  fullWidth/>
                  <TextField  autoFocus  margin="dense"  id="name"  label="Email Address"  type="email"  fullWidth/>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose}  style={{borderRadius:'20px'}} variant="contained" color="primary" autoFocus>Save</Button>
              </DialogActions>
          </Dialog>





            <div style={{display:'flex',padding:'10px 20px 0px 20px',background:'lavender'}}>
               <Typography style={{padding:'10px',height:'30px'}} variant="h6" component="h5">Skills & Endorsements</Typography>
               <div style={{marginLeft:'auto'}}>
               <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}><CreateIcon/></IconButton>
                </div>
            </div>
            <Divider />
            <div style={{padding:'20px'}}>
                <div style={{textAlign:'center',padding:"20px"}}>
                <Button variant="outlined" color="primary" >Take skill quiz</Button>
                </div>
                {
                   jobsuggested.map((row) => (
                     <Chip size="large" color="secondary" onDelete={handleDelete} style={{margin:'5px'}} variant="outlined" label={row} />
                   ))
                }
                <Collapse in={checked}>
                {
                   jobsuggested.map((row) => (
                     <Chip size="large" color="secondary" onDelete={handleDelete} style={{margin:'5px'}} variant="outlined" label={row} />
                   ))
                }   
                </Collapse>
                <div style={{textAlign:'center',padding:"20px"}}>
                   <Divider style={{marginBottom:'20px'}}/>
                    <Button variant="outlined" color="primary"  onClick={handleChangeinput}
                     startIcon={<ExpandMoreIcon />}>See more</Button>
                </div>
            </div>
      </div>
  );
}