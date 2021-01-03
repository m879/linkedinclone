import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';

import TextField from '@material-ui/core/TextField';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
//   root: {
    // maxWidth: 345,
//   },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandcomment: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
 
}));

export default function PostCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expandedcomment, setExpandedcomment] = React.useState(false);
  const handleExpandClickcomment = () => {
    setExpandedcomment(!expandedcomment);
  };

// FOR MENU ITEM
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root} variant="outlined" style={{margin:'30px 10px 30px 10px'}}>

      <Menu  id="simple-menu"  anchorEl={anchorEl}  keepMounted  open={Boolean(anchorEl)}  onClose={handleClose}>
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Unfollow</MenuItem>
        <MenuItem onClick={handleClose}>Report</MenuItem>
      </Menu>

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>
        }
        action={
          <IconButton aria-label="settings"  onClick={handleClick}><MoreVertIcon /></IconButton>
        }
        title={props.username}  subheader={props.work}
      />
      <CardMedia    className={classes.media}  image={props.img}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"> {props.shortdetail}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"><ThumbUpIcon /></IconButton>
        <IconButton aria-label="comment"
            className={clsx(classes.expandcomment, {
               [classes.expandOpen]: expandedcomment,
             })}
             onClick={handleExpandClickcomment}
             aria-expanded={expandedcomment}
            ><CommentIcon />
        </IconButton>

        <IconButton aria-label="share"><ShareIcon /></IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>


      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.detail}</Typography>
        </CardContent>
      </Collapse>


      <Collapse in={expandedcomment} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{display:'flex'}}>
                <TextField label="Start a post"     style={{margin:'0px 10px 0px 10px',width:'95%'}} 
                            variant="outlined"  size="small" />
                <IconButton aria-label="share" style={{marginTop:'-6px'}}><SendIcon/></IconButton>
          </div>
        </CardContent>
      </Collapse>


    </Card>
  );
}