import type { Note } from "../model/Note"

type NoteListProps = {
    listNotes: Note[];
    setNotesList: (data: Note[]) => void;
}

export default function NoteList({ listNotes, setNotesList } : NoteListProps) {
    return (
        <ul>
            {listNotes.map((listNote) => (
                <li key={listNote.id}>
                    <p>{listNote.title}</p>
                    <p>{listNote.body}</p>
                </li>
            ))}
        </ul>
    )
}