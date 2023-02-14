import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const greetings = [
    'hello', 'good morning'
  ]
  const [notes, setNotes] = useState(greetings)

  const [newNote, setNewNote] = useState('')



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
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />

        <button type='submit'>Add</button>

      </form>
      <div className='notes'>

        {
          notes.map((note, noteIndex) =>
            <li key={`note_${noteIndex}`}>
              <ul>{note}</ul>
            </li>

          )
        }
      </div>
    </div>
  )
}

export default App
