import React, { useState } from "react"
import type { Note } from "../model/Note";
import { useRef } from "react";

export default function NoteEditor() {
    const [formData, setFormData] = useState<Note>({
        id: 0,
        title: "",
        body: "",
        createdAt: ""
    });
    
    const refId = useRef<number>(1);

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
            id: refId.current,
            createdAt: new Date().toISOString()
        }

        console.log(newNote);
        refId.current += 1;

        setFormData({ id: 0, title: "", body: "", createdAt: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                id="title"
                name="title" 
                value={formData.title}
                onChange={handleChange}
            />

            <label htmlFor="body">Body</label>
            <textarea 
                id="body"
                name="body" 
                value={formData.body}
                onChange={handleChange}
            >
            </textarea>

            <button type="submit">save</button>
        </form>
    )
}