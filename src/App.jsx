import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const initialNote = [
    'hello', 'good morning'
  ]
  const [notes, setNotes] = useState(initialNote)

  const [newNote, setNewNote] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault()
    // if (!newNote.trim()) return
    setNotes(notes.concat(newNote))
    setNewNote('')
  }

  return (
    <div>

      <form >
        <p className='note-hdn'>Add note </p>
        Add Not: {""}
        <input
          type="text"
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
        />

        <button type='submit' onClick={handleSubmit}>Add</button>
        {
          notes.map((note, nameIndex) => <div>
            <li>
              <ul>{note}</ul>
            </li>
          </div>)
        }
        {notes}
      </form>

    </div>
  )
}

export default App
