import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import RemindMeIconCard from '@material-ui/icons/AddAlertOutlined';
import CollaboraterIconCard from '@material-ui/icons/PersonAddOutlined';
import ChangeColorIconCard from '@material-ui/icons/ColorLensOutlined';
import AddImageIconCard from '@material-ui/icons/ImageOutlined';
import ArchiveIconCard from '@material-ui/icons/ArchiveOutlined';
import MoreIconCard from '@material-ui/icons/MoreVertOutlined';
import Typography from '@material-ui/core/Typography';
import UndoIconCard from '@material-ui/icons/Undo';
import RedoIconCard from '@material-ui/icons/Redo';
import { Button } from '@material-ui/core';
import '../CssFile/MainNote.css';
import EditMainNode from './EditMainNode';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'



const PinIconCard = require('../components/Assets/pin.png')
const UnPinIcon = require('../components/Assets/UnPinIcon.svg')

const useStyles = makeStyles(theme => ({

    root1Card : {
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

root2Card : {
    display : 'flex',
    flexDirection :'row',
    alignItems : 'center',
    height : 'auto',
    width : 250,
    borderRadius : 'none',
    border : '1px solid #fff',
    boxShadow: 'none',
    
},

inputCard : {
    marginLeft : theme.spacing(1),
    flex : 1,
},

iconButtonCard : {
    padding : '20px',
    width : '1em',
    opacity : '2',
},

closeButtonCard : {
    padding : '20px'
},

pinIconCard : {
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
const [ noteOpen , setNoteClose ] = React.useState(false);
const [ moreOpenCard , setMoreOpenCard ] = React.useState(false);
const moreCardRef = React.useRef();

const handleClickNoteOpen = () => {
    setNoteClose(true);
    console.log("true");
};

const handleClickNoteClose = () => {
    setNoteClose(false);
    console.log("False");
};

return (
    <div>
        <EditMainNode 
            showDialogBox = {noteOpen}
                            closeDialogBox ={handleClickNoteClose} 
                            Title = {props.Notes.titleOfNote}
                            Data = {props.Notes.dataOfNode}
                            NotesData = {props.Notes} 
                            Nkey = {props.nKey}
        />  
    <Paper 
        component = "form" 
        className = {classes.root1Card} 
        
        >
            <div>

                <Paper component = "div" className = {classes.root2Card}>
                    <Typography
                        className = {classes.inputCard}
                        onClick = {handleClickNoteOpen}
                        >
                        {props.Notes.titleOfNote}
                    </Typography>
                    <img src = {PinIconCard} alt = "Logo" className = {classes.pinIconCard}/>
                </Paper>

                <Paper component = "div" className = {classes.root2Card}>
                    <Typography
                        className = {classes.inputCard}
                        onClick = {handleClickNoteOpen}
                        >
                        {props.Notes.dataOfNode}
                    </Typography>
                </Paper>

                <Paper component = "div" className = {classes.root2Card}>

                    <IconButton  
                        className = {classes.iconButtonCard} 
                        aria-label = "search">
                            <RemindMeIconCard />  
                    </IconButton>

                    <IconButton 
                        className = {classes.iconButtonCard} 
                        aria-label = "search">
                            <CollaboraterIconCard/>
                    </IconButton>

                    <IconButton 
                        className = {classes.iconButtonCard} 
                        aria-label = "search">
                            <ChangeColorIconCard />  
                    </IconButton>

                    <IconButton 
                        className = {classes.iconButtonCard} 
                        aria-label = "search">
                            <AddImageIconCard />  
                    </IconButton>

                    <IconButton
                        className = {classes.iconButtonCard} 
                        aria-label = "search">
                            <ArchiveIconCard />  
                    </IconButton>

                    <IconButton  
                        className = {classes.iconButtonCard} 
                        aria-label = "search"
                        ref = {moreCardRef}>
                            <MoreIconCard 
                                onClick = { ()=> setMoreOpenCard(!moreOpenCard) }
                            />  
                    </IconButton>
                    
                </Paper>
        </div>
        <Popper
                style = {{ width : '13%', 
                    paddingLeft : '5px', color : 'yellow', 
                    backgroundColor : '#fff', zIndex : '1' 
                }}
                open = {moreOpenCard}
                anchorEl = {moreCardRef.current}
                role = {undefined} transition disablePortal
                >
                    <ClickAwayListener onClickAway = { ()=> setMoreOpenCard(!moreOpenCard)}>
                    <Paper >
                        <MenuList> 
                            <MenuItem onClick = {()=> setMoreOpenCard(!moreOpenCard)}>
                                Delete note
                            </MenuItem>
                            <MenuItem onClick = {()=> setMoreOpenCard(!moreOpenCard)}> 
                                Add label
                            </MenuItem>
                            <MenuItem onClick = {()=> setMoreOpenCard(!moreOpenCard)}> 
                                Add drawing 
                            </MenuItem>
                            <MenuItem onClick = {()=> setMoreOpenCard(!moreOpenCard)}> 
                                Make a copy
                            </MenuItem>
                            <MenuItem onClick = {()=> setMoreOpenCard(!moreOpenCard)}> 
                                Show checkboxes
                            </MenuItem>
                            <MenuItem onClick = {()=> setMoreOpenCard(!moreOpenCard)}> 
                                Copy to Google Docs
                            </MenuItem>
                        </MenuList>
                    </Paper>
                    </ClickAwayListener>
            </Popper>
        </Paper>
            
    </div>  
);
}
