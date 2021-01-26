import React from 'react';
// import './style.css'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
  media: {
    height: 80,
  },
});

export default function NetworkCard(props) {
  const classes = useStyles();
  const [show, toggleShow] = React.useState(true);

  return (
    <div>
  {show &&
    <Card   variant="outlined" style={{margin:'2%',paddingBottom:'10px',marginTop:'20px'}}>
        <CardActionArea >
          <CardMedia id="cardimgback"
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
          />
          <IconButton id="cardclosebtn" edge="end" onClick={() => toggleShow(!show)}><CancelIcon/></IconButton>
        </CardActionArea>
        <div id="networkimg">
            <Avatar  alt="Remy Sharp"
            src={props.img} 
            // src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" 
            style={{height:'100px',width:'100px',marginTop:'-50px'}}/>
        </div>
        <CardContent style={{textAlign:'center'}}>
          <Typography gutterBottom variant="h6" component="h5">{props.name}</Typography>
          <Typography variant="body2" color="textMuted" component="p">{props.work}</Typography>
        </CardContent>
        <CardActions style={{textAlign:'center'}}>
              <Button variant="outlined" color="primary" size="large">Connect</Button>
        </CardActions>
    </Card>
   } 
  </div> 
  );
}