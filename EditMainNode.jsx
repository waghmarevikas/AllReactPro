import React , { Component } from "react";
import ReactDom from 'react-dom';
import { Dialog } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import InputBase from '@material-ui/core/InputBase'
import '../CssFile/EditMainNode.css'
import IconButton from '@material-ui/core/IconButton';
import RemindMeIcon from '@material-ui/icons/AddAlertOutlined';
import CollaboraterIcon from '@material-ui/icons/PersonAddOutlined';
import ChangeColorIcon from '@material-ui/icons/ColorLensOutlined';
import AddImageIcon from '@material-ui/icons/ImageOutlined';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import MoreIcon from '@material-ui/icons/MoreVertOutlined';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import { createUserNote, getNotes, updateUserNote } from './FirebaseServices';
import { Popper ,Paper } from '@material-ui/core';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const PinIcon = require('../components/Assets/pin.png')
const UnPinIcon = require('../components/Assets/UnPinIcon.svg')

class EditMainNode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.Title,
            data : this.props.Data,
            moreOpenEdit : false,
        };
        this.moreEditRef = React.createRef();
    }

    handleTitleChange = evt =>{
        this.setState({
            title : evt.target.value
        },()=>{
            console.log("TttT ",this.state.title)
        })
        
    } 

    handleNoteDataChange = evt =>{
        this.setState({
            data : evt.target.value
        },()=>{
            console.log("DddD ",this.state.data); 
        })
     
    }

    updateNotesData = () => {
        var obj = {
            titleOfNote : this.state.title,
            dataOfNode : this.state.data
        }
        console.log("Object "+obj)
        console.log(" Key "+this.props.Nkey)
        updateUserNote(obj,this.props.Nkey)
       this.props.closeDialogBox() 
    }

    handleMenuOpen = () => {
        this.setState({
            moreOpenEdit: true,
        })
    }

    handleMenuClose = () => {
        this.setState({
            moreOpenEdit : false
        })
    }

    
    render()
    {
        console.log("tt  "+this.props.Title);
        console.log("dd  "+this.props.Data)
        return(
            <div>
                <Dialog 
                    open = { this.props.showDialogBox}
                    onClose = {this.updateNotesData}
                
                    >
                    
                        <DialogContent>
                            <DialogContentText>
                            <div className = "pinIcon">
                                <InputBase
                                    placeholder = "Title "
                                    // defaultValue={this.props.NotesData.titleOfNote}
                                    value = { this.state.title }
                                     onChange = { this.handleTitleChange }
                                    />
                                    <img src = {PinIcon} alt = "Logo"  />
                            </div>
                            <div>
                                <InputBase
                                    placeholder = "Note take"
                                    value = {this.state.data}
                                    // defaultValue={this.props.NotesData.dataOfNode}
                                    onChange = { this.handleNoteDataChange}
                                />  
                            </div>
                            <div>
                                <IconButton  >
                                        <RemindMeIcon />  
                                </IconButton>

                                <IconButton  >
                                        <CollaboraterIcon/>
                                </IconButton>

                                <IconButton  >
                                        <ChangeColorIcon />  
                                </IconButton>

                                <IconButton  >
                                        <AddImageIcon />  
                                </IconButton>

                                <IconButton  >
                                        <ArchiveIcon />  
                                </IconButton>

                                <IconButton
                                    ref = {this.moreEditRef}
                                     >
                                        <MoreIcon 
                                            onClick = {this.handleMenuOpen}
                                        />  
                                </IconButton>

                                <IconButton  >
                                        <UndoIcon />  
                                </IconButton>

                                <IconButton  >
                                        <RedoIcon />  
                                </IconButton>
                            </div>

                            </DialogContentText>
                           
                        </DialogContent>

                            <DialogActions >
                                <Button 
                                    // onClick = {this.handleNoteClose}
                                    onClick = {this.updateNotesData}
                                    color = "primary" autoFocus 
                                    // onClose = {this.React}
                                    >
                                    Close
                                </Button>
                                
                            </DialogActions>
                            <Popper
                                    style = {{ width : '15%', 
                                        paddingLeft : '5px', color : 'yellow', 
                                        backgroundColor : '#fff', zIndex : '1' 
                                    }}
                                    open = {this.state.moreOpenEdit}
                                    anchorEl = {this.moreEditRef.current}
                                    role = {undefined} transition disablePortal
                                    >
                                    <Paper >
                                        <ClickAwayListener onClickAway = {this.handleMenuClose} >
                                            <MenuList>
                                                <MenuItem onClick = { this.handleMenuClose }> 
                                                    Delete note
                                                </MenuItem>
                                                <MenuItem onClick = { this.handleMenuClose }> 
                                                    Add label 
                                                </MenuItem>
                                                <MenuItem onClick = { this.handleMenuClose }> 
                                                    Add drawing 
                                                </MenuItem>
                                                <MenuItem onClick = { this.handleMenuClose }> 
                                                    Make a copy
                                                </MenuItem>
                                                <MenuItem onClick = { this.handleMenuClose }> 
                                                    Show checkboxes
                                                </MenuItem>
                                                <MenuItem onClick = { this.handleMenuClose }> 
                                                    Copy to Google Docs
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                            </Popper>
                           
                </Dialog>
                    
                
            </div>
        )
    }
}
export default EditMainNode;

 