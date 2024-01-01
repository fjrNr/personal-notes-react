import React from "react";
import { getInitialData } from "../utils/";
import NoteAppHeader from "./NoteAppHeader";
import NoteFormInput from "./NoteFormInput";
import ActiveNoteList from "./ActiveNoteList";
import ArchievedNoteList from "./ArchivedNoteList";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteFilter: '',
            notes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onRevertHandler = this.onRevertHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false
                    }
                ]
            }
        });
    }

    onArchiveHandler(targetId) {
        const notes = this.state.notes;
        const index = notes.findIndex(({id}) => id == targetId);
        notes[index].archived = true;
        this.setState({notes});
    }

    onRevertHandler(targetId) {
        const notes = this.state.notes;
        const index = notes.findIndex(({id}) => id == targetId);
        notes[index].archived = false;
        this.setState({notes});
    }

    onDeleteHandler(targetId) {
        const notes = this.state.notes.filter(note => note.id !== targetId);
        this.setState({notes});
    }

    render() {
        const notes = this.state.notes;

        return (
            <div className="app">
                <NoteAppHeader/>
                <div id="main-content">
                    <h1>Notes List</h1>
                    <h2>Create New Note</h2>
                    <NoteFormInput addNote={this.onAddNoteHandler}/>
                    <h2>Active Notes</h2>
                    <ActiveNoteList notes={notes.filter(note => !note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                    <h2>Archieved Notes</h2>
                    <ArchievedNoteList notes={notes.filter(note => note.archived)} onDelete={this.onDeleteHandler} onRevert={this.onRevertHandler}/>
                </div>
            </div>
        );
    }
}


export default NoteApp;