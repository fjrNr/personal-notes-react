import React from "react";

function CharacterLimitDisplay ({count}) {
    return <label>Title character left: {count}</label>;
}

class NoteFormInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characterLeft: 50,
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        // this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        if (event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    characterLeft: 50 - event.target.value.length,
                    title: event.target.value,
                }
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        this.props.addNote(this.state);
        
        this.setState(() => {
            return {
                title: '',
                body: ''
            }
        })
    }

    render() {
        return (
            <form id="note-form-input" onSubmit={this.onSubmitEventHandler}>
                <CharacterLimitDisplay count = {this.state.characterLeft}/>
                <input type="text" placeholder="Title ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                <textarea placeholder="Type your note here..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NoteFormInput;