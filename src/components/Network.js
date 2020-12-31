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


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';


const Network = () => {



      // FOR DIALOG OPEN
      const [open, setOpen] = React.useState(false);
      const theme = useTheme();
      const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
     //  const maxWidth = useMediaQuery(theme.breakpoints.down('lg'));
      
      const handleClickOpen = () => {
        setOpen(true);
      };
      
      const handleClose = () => {
        setOpen(false);
      };


      // FOR DIALOG OPEN
      const [openmore, setOpenmore] = React.useState(false);
     //  const theme = useTheme();
     //  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
      
      const handleClickOpenmore = () => {
        setOpenmore(true);
      };
      
      const handleClosemore = () => {
        setOpenmore(false);
      };



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


          <Dialog maxWidth='lg' fullScreen={fullScreen}  open={open}  onClose={handleClose}  aria-labelledby="responsive-dialog-title">
              <div style={{display:"flex"}}>
                  <DialogTitle id="responsive-dialog-title">{"People you may know"}</DialogTitle>
                <div style={{marginLeft:'auto',marginTop:'10px',marginRight:'5%'}}>
                  <IconButton onClick={handleClose}  edge="end"><HighlightOffIcon/></IconButton>
                </div>
              </div>
              <DialogContent dividers>
                  <Grid container style={{width:'100%'}}>
                       <Grid lg={3} xs={6}>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                       </Grid>
                       <Grid lg={3} xs={6}>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                       </Grid>
                       <Grid lg={3} xs={6}>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                       </Grid>
                       <Grid lg={3} xs={6}>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                         <NetworkCard/>
                       </Grid>
                  </Grid>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose}  style={{borderRadius:'20px'}} variant="contained" color="primary" autoFocus>Save</Button>
              </DialogActions>
          </Dialog>

         





          
          
          <Paper elevation={3} style={{marginTop:'20px'}}>
               <div style={{display:'flex',padding:'20px 20px 0px 20px'}}>
                  <Typography  variant="p" component="h5" style={{padding:'10px',height:'30px'}}>Software Engineer you may know</Typography>
                  <Button variant="outlined" onClick={handleClickOpen} color="primary" size="small" style={{marginLeft:'auto',height:'30px'}}>See all</Button>
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
          </Paper>

          <Paper elevation={3} style={{marginTop:'30px'}}>
               <Dialog  maxWidth='lg'   fullScreen={fullScreen}  open={openmore}  onClose={handleClosemore}  aria-labelledby="responsive-dialog-title">
                   <div style={{display:"flex"}}>
                       <DialogTitle id="responsive-dialog-title">{"School alumuni you know"}</DialogTitle>
                     <div style={{marginLeft:'auto',marginTop:'10px',marginRight:'5%'}}>
                       <IconButton onClick={handleClosemore}  edge="end"><HighlightOffIcon/></IconButton>
                     </div>
                   </div>
                   <DialogContent dividers>
                       <Grid container style={{width:'100%'}}>
                            <Grid lg={3} xs={6}>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                            </Grid>
                            <Grid lg={3} xs={6}>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                            </Grid>
                            <Grid lg={3} xs={6}>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                            </Grid>
                            <Grid lg={3} xs={6}>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                              <NetworkCard/>
                            </Grid>
                       </Grid>
                   </DialogContent>
                   <DialogActions>
                       <Button onClick={handleClosemore}  style={{borderRadius:'20px'}} variant="contained" color="primary" autoFocus>Save</Button>
                   </DialogActions>
               </Dialog>






               <div style={{display:'flex',padding:'20px 20px 0px 20px'}}>
                  <Typography  variant="p" component="h5" style={{padding:'10px',height:'30px'}}>School alumuni you know</Typography>
                  <Button variant="outlined" onClick={handleClickOpenmore} color="primary" size="small" style={{marginLeft:'auto',height:'30px'}}>See all</Button>
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
 
export default Network;