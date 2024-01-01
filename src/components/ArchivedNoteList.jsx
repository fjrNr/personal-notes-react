import React from "react";
import NoteItem from "./NoteItem";

function ArchievedNoteList ({notes, onRevert, onDelete}) {
    return (
        <div className="note-list">
            {
                (notes.length > 0)
                ? notes.map((note) => (
                    <NoteItem key={note.id} 
                            id={note.id}
                            onRevert={onRevert}
                            onDelete= {onDelete} 
                            {...note}/>
                ))
                : <p>No archieved notes there</p>
            }
        </div>
    )
}

export default ArchievedNoteList;