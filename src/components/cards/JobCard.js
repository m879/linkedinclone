import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function JobCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{margin:'10%',paddingBottom:'30px'}}>
      <CardContent>
          <Grid container>
              <Grid item lg={9} xs={9}>
                 <img style={{height:"100px",width:"100%"}}
                   src="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"/>
              </Grid>
              <Grid item lg={3} xs={3} style={{textAlign:'center'}}>
                  <IconButton aria-label="delete">
                    <BookmarkBorderIcon  fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete" >
                    <HighlightOffIcon fontSize="small" />
                  </IconButton>
              </Grid>
            </Grid>
            <Typography style={{textAlign:'center'}} variant="h6" component="h5">Software Developer</Typography>
            <Typography style={{textAlign:'center'}} className={classes.pos} color="textSecondary">Noida,UP,India</Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="secondary" size="large">Apply</Button>
      </CardActions>
    </Card>
  );
}
