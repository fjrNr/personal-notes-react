import React from "react";
import ArchiveButton from "./ArchiveButton";
import RevertButton from "./RevertButton";
import DeleteButton from "./DeleteButton";

function ButtonGroup({id, archived, onArchive, onDelete, onRevert}) {
    return (
        <div className="note-item_button-group">
            {
                (archived)
                ? <RevertButton id={id} onRevert={onRevert}/>
                : <ArchiveButton id={id} onArchive={onArchive}/>
            }
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}

export default ButtonGroup;