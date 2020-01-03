import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import NewListIcon from '@material-ui/icons/CheckBoxOutlined';
import NewNodeWithDrawingIcon from '@material-ui/icons/BrushOutlined';
import NewNoteWithImageIcon from '@material-ui/icons/ImageOutlined';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  mainRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.mainRoot}>
      <Typography style = {{ width : '50%' }} >
          Take a note....                          
      </Typography>
      <IconButton type = "submit" className = {classes.iconButton} aria-label = "search">
        <NewListIcon />
      </IconButton>
      <IconButton color = "primary" className = {classes.iconButton} aria-label = "directions">
        <NewNodeWithDrawingIcon/>
      </IconButton>
      <IconButton color = "primary" className = {classes.iconButton} aria-label = "directions">
        <NewNoteWithImageIcon />
      </IconButton> 
    </Paper>
  );
}

    
    