import React, { useState } from "react";
import Header from "./header.jsx";
import Footer from  "./footer.jsx";
import Note from "./note.jsx";
// import Info from "../info.js";
import CreateArea from "./createArea";

function App(){
    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes(PrevNotes => {
            return [...PrevNotes, note]
        })
    }

    function deleteNote(id) {
        setNotes(PrevNotes => {
            return PrevNotes.filter((noteItem, index) => {
                return index !==id; 
            })
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            
            {notes.map((noteItem, index) => {
                return ( <Note
                            key={index}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDelete={deleteNote}
                         />
                )
                
            })}
            <Footer/>
        </div>
    )
}

export default App;