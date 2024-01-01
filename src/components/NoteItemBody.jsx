import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemBody({title, body, createdAt}) {
    return (
        <div className="note-item_body">
            <h3 className="note-item_title">{title}</h3>
            <h4 className="note-item_created-at">{showFormattedDate(createdAt)}</h4>
            <p className="note-item_text">{body}</p>
        </div>
    );
}

export default NoteItemBody;