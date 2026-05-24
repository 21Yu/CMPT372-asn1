type EditorFormProps = {
    editorFormData: {
        id: string,
        title: string,
        body: string,
        createdAt: string
    };
    handleFormSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function EditorForm({editorFormData, handleFormChange, handleFormSubmit}:EditorFormProps) {
    return (
        <form 
            onSubmit={handleFormSubmit}
            className="bg-green-300 p-4 text-[11px] max-w-md border-2 border-black flex flex-col gap-4"
        >
            <div className="flex flex-col gap-1.5">
                <label htmlFor="title" className="font-bold">
                    Title
                </label>
                <input 
                    type="text" 
                    id="title"
                    name="title" 
                    value={editorFormData.title}
                    onChange={handleFormChange}
                    className="bg-white outline-none border border-[#4a4a4a] px-2 py-1"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="body" className="font-bold">Body</label>
                <textarea 
                    id="body"
                    name="body" 
                    value={editorFormData.body}
                    onChange={handleFormChange}
                    className="bg-white outline-none border border-[#4a4a4a] px-2 py-1"
                >
                </textarea>
            </div>

            <button 
                type="submit"
                className="bg-white border border-[#1c1c1c] py-1 px-4 self-end hover:bg-black hover:text-white font-bold"
            >
                Save
            </button>
        </form>
    )
}