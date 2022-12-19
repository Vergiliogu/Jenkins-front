import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/items')
    .then(response => setItems(response.data))
    .catch(error => console.log("Axios Error:", error))
  }, [])

  return (
    <div className="App">
      <ul className='items'>
        {items.map(i => <i key={i}>{i}</i>)}
      </ul>
    </div>
  )
}

export default App
