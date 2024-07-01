import { useState } from "react"
import "./App.css"

const App = () => {
  const [notes, setNotes]=useState([
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
  return (
    <div className="app-container">
      <form className="note-form">
        <input 
        placeholder="title"
        required />
        <textarea 
        placeholder="Content"
        rows={10}
        required
        ></textarea>
        <button type="submit">
          Add note
        </button>
      </form>
      <div className="notes-grid">
        <div className="note-item">
          <div className="notes-header">
            <button>X</button>
          </div>
            <h2>Note title</h2>
            <p>Note content</p>
        </div>
      </div>
    </div>
  )
}

export default App
