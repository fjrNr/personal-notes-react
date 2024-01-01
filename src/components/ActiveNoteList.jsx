import React from "react";
import NoteItem from "./NoteItem";

function ActiveNoteList ({notes, onArchive, onDelete}) {
    return (
        <div className="note-list">
            {
                (notes.length > 0)
                ? notes.map((note) => (
                    <NoteItem key={note.id} 
                            id={note.id}
                            onArchive={onArchive}
                            onDelete= {onDelete} 
                            {...note}/>
                ))
                : <p>No notes added</p>
            }
        </div>
    )
}

export default ActiveNoteList;