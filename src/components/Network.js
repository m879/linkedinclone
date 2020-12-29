import React from 'react';
// import "./style.css";
import { NavLink } from 'react-router-dom';


import NetworkCard from './networkcomponent/NetworkCard';
import HashtagCard from './networkcomponent/HashtagCard';


// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const network = () => {

    return (
       <div id="home">
          <Grid >
            <Paper elevation={1} style={{padding:'0.1px'}}>
            <div style={{display:'flex',padding:'20px 20px 20px 20px'}}>
               <Typography  variant="h6" component="h3" >No pending invitations</Typography>
               <div style={{marginLeft:'auto',height:'30px'}}>
                    <NavLink to="/managenetwork" style={{textDecoration:'none'}}>
                         <Button variant="outlined" color="primary" size="small" 
                         style={{marginLeft:'auto',height:'30px'}}>Manage</Button>
                    </NavLink>
               </div>
             </div>
            </Paper>
          </Grid>
         
           
           <Paper elevation={3} style={{marginTop:'3.125rem'}}>
               <div style={{display:'flex',padding:'20px 20px 0px 20px'}}>
                  <Typography  variant="p" component="h5" style={{padding:'10px',height:'30px'}}>Software Engineer you may know</Typography>
                  <Button variant="outlined" color="primary" size="small" style={{marginLeft:'auto',height:'30px'}}>See all</Button>
               </div>
               <Grid container >
                 <Grid item lg={3} xs={6}  >
                      <NetworkCard/>
                      <NetworkCard/>
                      <NetworkCard/>
                 </Grid>
                 <Grid item lg={3} xs={6}  >
                 <NetworkCard/>
                      <NetworkCard/>
                      <NetworkCard/>
                 </Grid>
                 <Grid item lg={3} xs={6} >
                 <NetworkCard/>
                      <NetworkCard/>
                      <NetworkCard/>
                 </Grid>
                 <Grid item lg={3} xs={6} >
                 <NetworkCard/>
                      <NetworkCard/>
                      <NetworkCard/>
                 </Grid>
               </Grid>

               <div style={{display:'flex',padding:'20px 20px 0px 20px'}}>
                  <Typography  variant="p" component="h5" style={{padding:'10px',height:'30px'}}>School alumuni you know</Typography>
                  <Button variant="outlined" color="primary" size="small" style={{marginLeft:'auto',height:'30px'}}>See all</Button>
               </div>
               <Grid container >
                 <Grid item lg={3} xs={6}  >
                      <NetworkCard/>
                      <NetworkCard/>
                      <NetworkCard/>
                 </Grid>
                 <Grid item lg={3} xs={6}  >
                 <NetworkCard/>
                      <NetworkCard/>
                      <NetworkCard/>
                 </Grid>
                 <Grid item lg={3} xs={6} >
                 <NetworkCard/>
                      <NetworkCard/>
                      <NetworkCard/>
                 </Grid>
                 <Grid item lg={3} xs={6} >
                 <NetworkCard/>
                      <NetworkCard/>
                      <NetworkCard/>
                 </Grid>
               </Grid>



               <div style={{display:'flex',padding:'20px 20px 0px 20px'}}>
                  <Typography  variant="p" component="h5" style={{padding:'10px',height:'30px'}}>Hashtags to follow based on your activity</Typography>
               </div>
               <Grid container >
                 <Grid item lg={6} xs={6}  >
                      <HashtagCard/>
                      <HashtagCard/>
                      <HashtagCard/>
                 </Grid>
                 <Grid item lg={6} xs={6}  >
                      <HashtagCard/>
                      <HashtagCard/>
                      <HashtagCard/>
                 </Grid>
               </Grid>

           </Paper>
       </div>
    );
}
 
export default network;