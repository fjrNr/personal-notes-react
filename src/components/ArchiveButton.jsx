import React from "react";

function ArchiveButton({id, onArchive}) {
    return (
        <button className="note-item_archive" onClick={() => onArchive(id)}>Archive</button>
    )
}

export default ArchiveButton;