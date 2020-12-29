import React from 'react';
// import './style.css'


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


export default function Dashboard() {
//   const classes = useStyles();

  return (
    <div>
        <div style={{padding:'10px 20px 0px 20px',background:'lavender'}}>
           <Typography  variant="h6" component="h5" style={{padding:'10px',height:'30px'}}>Your Dashboard</Typography>
           <Typography  variant="p" component="p" style={{padding:'10px',height:'30px'}}>Private to you</Typography>
        </div>
        <Divider />
                        
        <Grid container style={{textAlign:'center',margin:'20px 0px 20px 0px'}}>
            <Grid lg={4} xs={4}>
                <Card variant="outlined">
                    <CardContent>
                      <Typography style={{color:"blue"}}  gutterBottom>42</Typography>
                      <Typography variant="body2" component="p">Who viewed your profile</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid lg={4} xs={4}>
                <Card variant="outlined">
                    <CardContent>
                      <Typography  style={{color:"blue"}}  gutterBottom>200</Typography>
                      <Typography variant="body2" component="p">Posts views</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid lg={4} xs={4}>
                <Card variant="outlined">
                    <CardContent>
                      <Typography   style={{color:"blue"}} gutterBottom>30</Typography>
                      <Typography variant="body2" component="p">Search appearances</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>  
    
  );
}