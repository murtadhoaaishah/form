import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  // const initialNote = [
  //   'hello', 'good morning'
  // ]
  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState(" ")



  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newNote.trim()) return
    setNotes(notes.concat(newNote))
    setNewNote('')
  }
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <p className='note-hdn'>Add note </p>
        Add Note: {" "}
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />

        <button type='submit'>Add</button>
        {
          notes.map((note, noteIndex) =>
            <li key={`note_${noteIndex}`}>
              <ul>{note}</ul>
            </li>
          )
        }
        <p>{notes}</p>
        {/* {console.log(value)} */}
      </form>

    </div>
  )
}

export default App
