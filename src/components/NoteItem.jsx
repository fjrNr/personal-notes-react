import React from "react";
import NoteItemBody from "./NoteItemBody";
import ButtonGroup from "./ButtonGroup";

function NoteItem({id, title, body, createdAt, archived, onArchive, onDelete, onRevert}) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} createdAt={createdAt}/>
            <ButtonGroup id={id} archived={archived} onArchive={onArchive} onDelete={onDelete} onRevert={onRevert}/>
        </div>
    );
}

export default NoteItem;