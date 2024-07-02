import { useState } from "react"
import "./App.css"

type Note ={
  id: number
  title: string
  content: string 
}

const App = () => {
  const [notes, setNotes]=useState<Note[]>([
    {
    id:1,
    title: "Note title 1",
    content: "Note content 1"
  },
  {
    id:2,
    title: "Note title 2",
    content: "Note content 2"
  },
  {
    id:3,
    title: "Note title 3",
    content: "Note content 3"
  },
  {
    id:4,
    title: "Note title 4",
    content: "Note content 4"
  }
] )

const [title, setTitle]=useState("")
const [content, setContent]=useState("")

const [selectedNote, setSelectedNote]=useState<Note | null>(null)

const handleNoteClick=(note:Note)=>{
  setSelectedNote(note)
  setTitle(note.title)
  setContent(note.content)
}

const handleAddNote=(e:React.FormEvent)=>{
  e.preventDefault()
  // console.log("title:", title)
  // console.log("content:", content)

if(!selectedNote) {
  return;
}
const updateNote:Note={
  id: selectedNote.id,
  title,
  content
}

const updatedNotes=notes.map((note)=>note.id===selectedNote.id ? updateNote : note)
setNotes(updatedNotes)
setSelectedNote(null)
setTitle("")
setContent("")
}

const handleCancel=()=>{
  setSelectedNote(null)
  setTitle("")
  setContent("")
}

const deleteNote=(event:React.MouseEvent, noteId:number)=>{
event.stopPropagation()

const updatedNotes=notes.filter((note)=>note.id!==noteId)

setNotes(updatedNotes)
}

  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(event)=>
      selectedNote ? handleAddNote(event) : handleAddNote(event)
      }>
        <input 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="title"
        required />
        <textarea 
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        placeholder="Content"
        rows={10}
        required
        ></textarea>
        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button type="submit" onClick={handleCancel}>Cancel</button>
          </div>
        ):(<button type="submit">Add note</button>)
        }
        <button type="submit">
          Add note
        </button>
      </form>
      <div className="notes-grid">
        {
        notes.map((note)=>(
        <div 
        className="note-item"
         key={note.id}
         onClick={()=>handleNoteClick(note)}
         >
          
          <div className="notes-header">
            <button onClick={(event)=>deleteNote(event, note.id)}>X</button>
          </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default App
