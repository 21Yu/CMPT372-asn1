import { useState, useEffect } from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import type { Note } from "./model/Note";

export default function App() {
    const [notes, setNotes] = useState<Note[]>(() => {
        const savedNotes = localStorage.getItem('localNotes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem('localNotes', JSON.stringify(notes));
    }, [notes]);

    console.log(notes);
    return (
        <div className="min-h-screen w-full p-8 flex flex-col md:flex-row gap-8 justify-center items-start">
            <NoteEditor editorNotes={notes} setNotesEditor={setNotes} />
            <NoteList listNotes={notes} setNotesList={setNotes} />
        </div>
    )
}