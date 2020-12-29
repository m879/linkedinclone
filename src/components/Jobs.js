import React from 'react';
import "./style.css";

import JobCard from "./cards/JobCard";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import Chip from '@material-ui/core/Chip';


let jobsuggested=["Front end","Django Developer","Google Developer","Google web developer","Microsoft Engineer"]

const Jobs= () => {

   const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };

    return (
       <div id="home">
          <Paper elevation={3} style={{padding:'30px'}}>
               <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                  <Typography  variant="h6" component="h5" 
                  style={{padding:'10px'}}>Search for your next job</Typography>
               </div> 
               <Grid container style={{marginTop:'30px'}}>
                  <Grid lg={4} xs={12}>
                     <div style={{margin:'10px'}}>
                       <TextField label="Search by skill,company"  fullWidth  variant="outlined" id="standard-size-small"  size="small" />
                     </div>
                  </Grid>
                  <Grid lg={4} xs={12}>
                     <div style={{margin:'10px'}}>
                       <TextField label="Location"  fullWidth  variant="outlined" id="standard-size-small"  size="small" />
                     </div>
                  </Grid>
                  <Grid lg={4} xs={12}>
                     <div style={{textAlign:'center',margin:'10px'}}>
                     <Button variant="contained" color="primary"  size="large">Search</Button>
                      </div>
                  </Grid>
               </Grid>
           </Paper>


           <Paper elevation={3} style={{padding:'30px',marginTop:'40px'}}>
               <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                  <Typography  variant="h6" component="h5" 
                  style={{padding:'10px'}}>Suggested job searches</Typography>
               </div> 
               <Grid container style={{marginTop:'30px'}}>
                  {
                     jobsuggested.map((row) => (
                       <Chip size="large" color="secondary" onDelete={handleDelete} style={{margin:'5px'}} variant="outlined" label={row} />
                     ))
                  }
               </Grid>
           </Paper>


           <Paper elevation={3} style={{marginTop:'40px'}}>
               <div style={{display:'flex',padding:'0px 20px 0px 20px',background:'lavender'}}>
                  <Typography  variant="h6" component="h5" 
                  style={{padding:'10px'}}>Recommended for you</Typography>
               </div> 
               <Grid container style={{marginTop:'30px'}}>
                  <Grid lg={3} xs={6}>
                     <JobCard/>
                     <JobCard/>
                  </Grid>
                  <Grid lg={3} xs={6}>
                     <JobCard/>
                     <JobCard/>
                  </Grid>
                  <Grid lg={3} xs={6}>
                     <JobCard/>
                     <JobCard/>
                  </Grid>
                  <Grid lg={3} xs={6}>
                     <JobCard/>
                     <JobCard/>
                  </Grid>
               </Grid>
           </Paper>

       </div>
    );
}
 
export default Jobs;