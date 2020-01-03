import React , {Component} from 'react';
import ReactDom from 'react-dom';
import Notes from './Notes';
import MainNote from './MainNote'; 
import { Button } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { createUserNote, getNotes } from './FirebaseServices';
import NodeAddInCard from './NodeAddInCard';

class CreateNote extends Component { 
    constructor (props) {
        super (props) ;
        this.state = {
            showNote : true,
            noteTitle : '',
            takeNote : '',
            notes:null,
        };
    }

    handleShowNotesClose = () => {
        this.setState ({
            showNote : false,
        })
    }

     handleClickAway = () => {
        this.setState ({
            showNote : true,
        })
        if(!this.state.noteTitle && !this.state.takeNote) {
            console.log("Empty")
        }
        else {
            var obj = {
                titleOfNote : this.state.noteTitle,
                dataOfNode : this.state.takeNote,
            }
            createUserNote(obj)
            this.setState({
                noteTitle : '',
                takeNote : '',
            })
        }    
    }

    handleNoteTitle = (event) => {
        this.setState ({
            noteTitle : event.target.value,
        });
        console.log(this.state.noteTitle);
        
    }

    handleTakeNote = (event) => {
        this.setState ({
            takeNote : event.target.value,
        });
        console.log(this.state.takeNote);
    }


    componentDidMount(){
        getNotes((notes)=>{
            this.setState({
                notes:notes
            },()=>{
                console.log("state notes:",this.state.notes);
                
            })
        });
    }
    
    render () {
        return (
            <div>
                    {
                        this.state.showNote == true ?
                        ( 
                            <div onClick = { this.handleShowNotesClose } 
                            className = "mainNote">
                                <Notes /> 
                            </div>
                        ) 
                        :
                        <ClickAwayListener 
                            onClickAway = { this.handleClickAway } 
                        >
                            <div className = "mainNote">
                                <MainNote handleClickAway = { this.handleClickAway } 
                                          handleNoteTitle = { this.handleNoteTitle }
                                          handleTakeNote = { this.handleTakeNote }   
                                          NoteTitle = { this.state.noteTitle }
                                          TakeNote = { this.state.takeNote }
                                />
                            </div>
                        </ClickAwayListener>
                    }
               
               <div>

                   {    this.state.notes !== null &&
                       Object.getOwnPropertyNames(this.state.notes).map((key, index)=>(
                            <NodeAddInCard 
                                Notes = {this.state.notes[key]}
                                nKey = {key}
                            />
                       ))
                   }
                   

               </div>
                
            </div>
    );
}
}
export default CreateNote;