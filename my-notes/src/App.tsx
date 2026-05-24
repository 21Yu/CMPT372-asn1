import { useState } from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import type { Note } from "./model/Note";

export default function App() {
    const [notes, setNotes] = useState<Note[]>([]);

    console.log(notes);
    return (
        <>
            <NoteEditor editorNotes={notes} setNotesEditor={setNotes} />
            <NoteList listNotes={notes} setNotesList={setNotes} />
        </>
    )
}