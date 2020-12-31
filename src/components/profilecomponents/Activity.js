import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function Activity() {

  return (
      <div>
          <div style={{display:'flex',padding:'10px 20px 0px 20px',background:'lavender'}}>
             <Typography style={{padding:'10px',height:'30px'}} variant="h6" component="h5">Activity</Typography>
          </div>
          <Divider />
          <div style={{padding:'20px'}}>
              <Grid container>
                  <Grid lg={6} xs={12}>
                      <Card style={{width:'90%',marginTop:'30px',marginLeft:'5%'}}>
                          <CardHeader
                            avatar={
                              <Avatar 
                              src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
                              ></Avatar>
                            }
                            title="Thanks"
                            subheader="Meraj replied as comment"
                          />
                      </Card>
                  </Grid>
                  <Grid lg={6} xs={12}>
                      <Card style={{width:'90%',marginTop:'30px',marginLeft:'5%'}}>
                          <CardHeader
                            avatar={
                              <Avatar 
                              src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
                              ></Avatar>
                            }
                            title="Thanks"
                            subheader="Meraj replied as comment"
                          />
                      </Card>
                  </Grid>
              </Grid>
              <div style={{textAlign:'center',padding:"20px"}}>
                 <Divider style={{marginBottom:'20px'}}/>
                  <Button variant="outlined" color="primary" 
                   startIcon={<ExpandMoreIcon />}>See all activity</Button>
              </div>
          </div>
      </div>
    
  );
}