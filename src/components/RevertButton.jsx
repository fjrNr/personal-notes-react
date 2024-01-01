import React from "react";

function RevertButton({id, onRevert}) {
    return (
        <button className="note-item_revert" onClick={() => onRevert(id)}>Revert</button>
    )
}

export default RevertButton;