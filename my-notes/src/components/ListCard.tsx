import type { Note } from "../model/Note"

type ListCardProps = {
    listCardNotes: Note[];
    handleListDelete: (id: string) => void;
}

export default function ListCard({ listCardNotes, handleListDelete }: ListCardProps) {
    return (
        <ul className="bg-violet-500 p-4 text-[11px] max-w-md border-2 border-black flex flex-col gap-3">
            {listCardNotes.map((listNote) => (
                <li 
                    key={listNote.id}
                    className="border border-[#4a4a4a] bg-white p-3 flex flex-col gap-2 relative group"
                >
                    <details>
                        <summary className="font-bold">
                            Note
                        </summary>
                        <div className="mt-2 pt-2 flex gap-4">
                            <div>
                                <span className="font-bold">Title</span>
                                <p>{listNote.title || <em>Untitled</em>}</p>
                            </div>
                            <div>
                                <span className="font-bold">Body</span>
                                <p>{listNote.body || <em>No content</em>}</p>
                            </div>
                        </div>
                    </details>
                    <button 
                        onClick={() => handleListDelete(listNote.id)}
                        className="border border-black py-0.5 px-3 self-end hover:bg-red-400 font-bold mt-1"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}