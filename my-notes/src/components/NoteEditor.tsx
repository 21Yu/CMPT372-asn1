import React, { useState } from "react"
import type { Note } from "../model/Note";
import EditorForm from "./EditorForm";

type NoteEditorProps = {
    editorNotes: Note[];
    setNotesEditor: (data: Note[]) => void;
}

export default function NoteEditor({ editorNotes, setNotesEditor } : NoteEditorProps) {
    const [formData, setFormData] = useState<Note>({
        id: "",
        title: "",
        body: "",
        createdAt: ""
    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newNote: Note = {
            ...formData,
            id: String(crypto.randomUUID()),
            createdAt: new Date().toISOString()
        }

        setNotesEditor([...editorNotes, newNote])

        setFormData({ id: "", title: "", body: "", createdAt: "" });
    }

    return (
        <EditorForm editorFormData={formData} handleFormChange={handleChange} handleFormSubmit={handleSubmit} />
    )
}