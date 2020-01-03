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
    import UndoIcon from '@material-ui/icons/Undo';
    import RedoIcon from '@material-ui/icons/Redo';
    import { Button, MenuItem } from '@material-ui/core';
    import Menu from "@material-ui/core/Menu";
    import menuItem from '@material-ui/core/MenuItem';

    import '../CssFile/MainNote.css';
    import { handleNoteTitle, handleTakeNote} from '../components/CreateNote'
    

    const PinIcon = require('../components/Assets/pin.png')
    const UnPinIcon = require('../components/Assets/UnPinIcon.svg')
    const MoreOption = [
        'Delete note',
        'Add label',
        'Add drawing',
        'Make a copy',
        'show checkboxes',
        'copy to Google Docs',
    ];
    const[possitionOfMenu,setPossitionOfMenu] = React.useState(null);
    const[menuOpen] = Boolean(possitionOfMenu)
    const MenuHeight = 48;

    const handleMenuOpen = evt => {
        setPossitionOfMenu(evt.currentTarget);
    }

    const handleMenuClose = () => {
        setPossitionOfMenu(null)
    }

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
    const classes = useStyles();

    return (
        <Paper component = "form" className = {classes.root1}>
            <div>

            <Paper component = "form" className = {classes.root2}>
                <InputBase
                    className = {classes.input}
                    placeholder = "Title "
                    value = { props.NoteTitle }
                    onChange = { props.handleNoteTitle }
                />
                <img src = {PinIcon} alt = "Logo" className = {classes.pinIcon}/>
            </Paper>

            <Paper component = "form" className = {classes.root2}>
                <InputBase
                    className = {classes.input}
                    placeholder = "Take a note..."
                    inputProps = {{ 'aria-label' : 'search google maps' }}
                    type = " text "
                    value = { props.TakeNote }
                    onChange = { props.handleTakeNote }
                />
            </Paper>

            <Paper component = "form" className = {classes.root2}>

                <IconButton type = "submit" 
                    className = {classes.iconButton} 
                    aria-label = "search" >
                        <RemindMeIcon />  
                </IconButton>

                <IconButton type = "submit" 
                    className = {classes.iconButton} 
                    aria-label = "search" >
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
                    aria-label = "search"
                    onClick = {handleMenuOpen}
                    >
                        <MoreIcon /> 
                            <Menu
                                id = "log-menu"
                                anchorEl = {possitionOfMenu}
                                keppMounted
                                open = {menuOpen}
                                onClose = {handleMenuClose}
                                PaperProps = {{
                                    style : {
                                        maxHeight = MenuHeight * 10,
                                        width = 180
                                    },
                                }}
                                >
                                    {MoreOption.map(option => (
                                      <MenuItem 
                                        key = {option} 
                                        selected = { option === 'Pyxis' 
                                        onClick = {handleMenuClose} >
                                            {MoreOption}
                                      </MenuItem>  
                                    ))}
                                
                                </Menu> 
                </IconButton>

                <IconButton type = "submit" 
                    className = {classes.iconButton} 
                    aria-label = "search">
                        <UndoIcon />  
                </IconButton>

                <IconButton type = "submit" 
                    className = {classes.iconButton} 
                    aria-label = "search">
                        <RedoIcon />  
                </IconButton>
                
                < Button onClick = { props.handleClickAway } > Close </Button>
            </Paper>
            </div>
        </Paper>
        
    );
    }

    export default CustomizedInputBase;