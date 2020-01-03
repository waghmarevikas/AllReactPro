import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import RemindMeIcon from '@material-ui/icons/AddAlertOutlined';
import CollaboraterIcon from '@material-ui/icons/PersonAddOutlined';
import ChangeColorIcon from '@material-ui/icons/ColorLensOutlined';
import AddImageIcon from '@material-ui/icons/ImageOutlined';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import MoreIcon from '@material-ui/icons/MoreVertOutlined';
import Typography from '@material-ui/core/Typography';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import { Button } from '@material-ui/core';
import '../CssFile/MainNote.css';
import EditMainNode from './EditMainNode';



const PinIcon = require('../components/Assets/pin.png')
const UnPinIcon = require('../components/Assets/UnPinIcon.svg')

const useStyles = makeStyles(theme => ({

    root1 : {
    padding : '2px 4px',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor : 'white',
    borderRadius : 'none',
    marginLeft : '10px',
    marginTop : '10px',
    borderColor : 'white',
    width : 250,
},

root2 : {
    display : 'flex',
    flexDirection :'row',
    alignItems : 'center',
    height : 'auto',
    width : 250,
    borderRadius : 'none',
    border : '1px solid #fff',
    boxShadow: 'none',
    
},

input : {
    marginLeft : theme.spacing(1),
    flex : 1,
},

iconButton : {
    padding : '20px',
    width : '1em',
    opacity : '2',
},

closeButton : {
    padding : '20px'
},

pinIcon : {
    marginRight : '21px',
    marginLeft : '32px',
    marginTop : '8px',
},

}));

function hello(){
    console.log("hello");
    
}
export default function  CustomizedInputBase(props) {
const classes = useStyles();
const [nodeOpen,setNoteClose] = React.useState(false);

const handleClickNodeOpen = () => {
    setNoteClose(true);
    console.log("true");
};

const handleClickNodeClose = () => {
    setNoteClose(false);
    console.log("False");
};

return (
    <div>
    <Paper 
        component = "form" 
        className = {classes.root1} 
        onClick = {handleClickNodeOpen}
        >
            <div>

                <Paper component = "div" className = {classes.root2}>
                    <Typography
                        className = {classes.input}
                    >
                        {props.Notes.titleOfNote}
                    </Typography>
                    <img src = {PinIcon} alt = "Logo" className = {classes.pinIcon}/>
                </Paper>

                <Paper component = "form" className = {classes.root2}>
                    <Typography
                        className = {classes.input}
                    >
                        {props.Notes.dataOfNode}
                    </Typography>
                </Paper>

                <Paper component = "form" className = {classes.root2}>

                    <IconButton type = "submit" 
                        className = {classes.iconButton} 
                        aria-label = "search">
                            <RemindMeIcon />  
                    </IconButton>

                    <IconButton type = "submit" 
                        className = {classes.iconButton} 
                        aria-label = "search">
                            <CollaboraterIcon/>
                    </IconButton>

                    <IconButton type = "submit" 
                        className = {classes.iconButton} 
                        aria-label = "search">
                            <ChangeColorIcon />  
                    </IconButton>

                    <IconButton type = "submit" 
                        className = {classes.iconButton} 
                        aria-label = "search">
                            <AddImageIcon />  
                    </IconButton>

                    <IconButton type = "submit" 
                        className = {classes.iconButton} 
                        aria-label = "search">
                            <ArchiveIcon />  
                    </IconButton>

                    <IconButton type = "submit" 
                        className = {classes.iconButton} 
                        aria-label = "search">
                            <MoreIcon />  
                    </IconButton>
                    
                </Paper>

        </div>
        <div>
            

            
        </div>
    </Paper>
<EditMainNode showDialogBox = {nodeOpen}
    closeDialogBox ={handleClickNodeClose} 
    Title = {props.Notes.titleOfNote}
    Data = {props.Notes.dataOfNode}
    NotesData = {props.Notes} 
    Nkey={props.nKey}
    />  
    </div>  
);
}
