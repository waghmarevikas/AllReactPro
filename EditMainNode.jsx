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

const PinIcon = require('../components/Assets/pin.png')
const UnPinIcon = require('../components/Assets/UnPinIcon.svg')

class EditMainNode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.Title,
            data : this.props.Data
        };
        
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
                                    // className = {classes.input}
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
                                <IconButton type = "submit" >
                                        <RemindMeIcon />  
                                </IconButton>

                                <IconButton type = "submit" >
                                        <CollaboraterIcon/>
                                </IconButton>

                                <IconButton type = "submit" >
                                        <ChangeColorIcon />  
                                </IconButton>

                                <IconButton type = "submit" >
                                        <AddImageIcon />  
                                </IconButton>

                                <IconButton type = "submit" >
                                        <ArchiveIcon />  
                                </IconButton>

                                <IconButton type = "submit">
                                        <MoreIcon />  
                                </IconButton>

                                <IconButton type = "submit" >
                                        <UndoIcon />  
                                </IconButton>

                                <IconButton type = "submit" >
                                        <RedoIcon />  
                                </IconButton>
                            </div>

                            </DialogContentText>
                           
                        </DialogContent>

                            <DialogActions >
                            <Button 
                                // onClick = {this.handleNoteClose}
                                onClick = {this.props.closeDialogBox}
                                color = "primary" autoFocus 
                                // onClose = {this.React}
                                >
                                Close
                            </Button>
                            </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default EditMainNode;

 