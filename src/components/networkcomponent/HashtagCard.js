import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HashtagCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined" style={{margin:'10%',paddingBottom:'30px'}}>
      <CardContent>
          <Grid container>
            <Grid item lg={6} xs={12}>
            <img style={{height:"100px",width:"100%"}}
              src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"/>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Typography style={{textAlign:'center'}} variant="h5" component="h2">#software engineer</Typography>
              <Typography style={{textAlign:'center'}} className={classes.pos} color="textSecondary">10,500 followers</Typography>
            </Grid>
          </Grid>
          
      </CardContent>
      <CardActions>
      <Button variant="outlined" color="secondary" size="large">Follow</Button>
      </CardActions>
    </Card>
  );
}
