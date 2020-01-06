    import React , { useRef } from 'react';
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
    import UndoIcon from '@material-ui/icons/Undo';
    import RedoIcon from '@material-ui/icons/Redo';
    import { Button } from '@material-ui/core';
    import MenuList from '@material-ui/core/MenuList'
    import Menu from "@material-ui/core/Menu";
    // import MenuItem from '@material-ui/core/MenuItem';
    import {Popper} from '@material-ui/core';
    // import MenuList from '@material-ui/core/MenuList';
    import Grow from '@material-ui/core/Grow';
    import ClickAwayListener from '@material-ui/core/ClickAwayListener';
    import MenuItem from '@material-ui/core/MenuItem'

    import '../CssFile/MainNote.css';
    import { handleNoteTitle, handleTakeNote} from '../components/CreateNote'

    

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
        borderColor : 'white',
        width : 600,
    },
    
    root2 : {
        display : 'flex',
        flexDirection :'row',
        alignItems : 'center',
        height : 'auto',
        width : 600,
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


    function CustomizedInputBase (props) {   

        const [ moreOpen , setMoreOpen ] = React.useState(false)
        const moreRef = React.useRef();
        const classes = useStyles();
        const [ pinIcon , unPinIcon ] = React.useState(true);
        
        const handlePinChange = () => {
            unPinIcon(false)
        } 
        // const 
        const handleImage =()=> {
            alert("Hey....")
        }

    return (
        <Paper component = "div" className = {classes.root1}>
            <div>

            <Paper component = "div" className = {classes.root2}>
                <InputBase
                    className = {classes.input}
                    placeholder = "Title "
                    value = { props.NoteTitle }
                    onChange = { props.handleNoteTitle }
                />
                <img src = {PinIcon} 
                    alt = "Logo" 
                    className = {classes.pinIcon}
                    onClick = {handleImage}
                    />
            </Paper>

            <Paper component = "div" className = {classes.root2}>
                <InputBase
                    className = {classes.input}
                    placeholder = "Take a note..."
                    inputProps = {{ 'aria-label' : 'search google maps' }}
                    type = " text "
                    value = { props.TakeNote }
                    onChange = { props.handleTakeNote }
                />
            </Paper>

            <Paper component = "div" className = {classes.root2}>

                <IconButton 
                    className = {classes.iconButton} 
                    aria-label = "search" >
                        <RemindMeIcon />  
                </IconButton>

                <IconButton 
                    className = {classes.iconButton} 
                    aria-label = "search" >
                        <CollaboraterIcon/>
                </IconButton>

                <IconButton 
                    className = {classes.iconButton} 
                    aria-label = "search">
                        <ChangeColorIcon />  
                </IconButton>

                <IconButton 
                    className = {classes.iconButton} 
                    aria-label = "search">
                        <AddImageIcon />  
                </IconButton>

                <IconButton 
                    className = {classes.iconButton} 
                    aria-label = "search">
                        <ArchiveIcon />  
                </IconButton>

                <IconButton 
                    className = { classes.iconButton } 
                    aria-label = "search"
                    ref = {moreRef}
                    >
                        <MoreIcon
                            onClick = {()=>setMoreOpen(!moreOpen)} 
                        /> 
                        
                </IconButton>

                <IconButton 
                    className = {classes.iconButton} 
                    aria-label = "search">
                        <UndoIcon />  
                </IconButton>

                <IconButton 
                    className = {classes.iconButton} 
                    aria-label = "search">
                        <RedoIcon />  
                </IconButton>
                
                < Button onClick = { props.handleClickAway } > Close </Button>
            </Paper>
            </div>
            <Popper
                style = {{ width : '15%', 
                    paddingLeft : '5px', color : 'yellow', 
                    backgroundColor : '#fff', zIndex : '1' 
                }}
                open = {moreOpen}
                anchorEl = {moreRef.current}
                role = {undefined} transition disablePortal
                >
                    <Paper >
                        <ClickAwayListener onClickAway = { props.handleClickAway}>
                            <MenuList>
                                <MenuItem onClick = { props.handleClickAway}> 
                                    Add label 
                                </MenuItem>
                                <MenuItem onClick = { props.handleClickAway}> 
                                    Add drawing 
                                </MenuItem>
                                <MenuItem onClick = { props.handleClickAway}> 
                                    Show checkboxes
                                </MenuItem>
                            </MenuList> 
                        </ClickAwayListener>
                        
                    </Paper>
            </Popper>
        </Paper>
        
    );
    }

    export default CustomizedInputBase;