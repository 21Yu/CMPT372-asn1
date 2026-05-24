import type { Note } from "../model/Note"
import ListCard from "./ListCard";

type NoteListProps = {
    listNotes: Note[];
    setNotesList: (data: Note[]) => void;
}

export default function NoteList({ listNotes, setNotesList } : NoteListProps) {

    const handleDelete = (idToDelete: string) => {
        const updatedNotes = listNotes.filter(listNote => listNote.id !== idToDelete);
        setNotesList(updatedNotes);
    }

    return (
        <ListCard listCardNotes={listNotes} handleListDelete={handleDelete} />
    )
}