import React from 'react';
// import './style.css'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';



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