import { useState, useEffect } from 'react'
import './styles/App.css'
import api from './services/api'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Example API call
    api.get('/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Interview Platform</h1>
        <p>
          Frontend is running successfully.
        </p>
        <p>
          Backend connection status: <strong>{message || 'Connecting...'}</strong>
        </p>
      </header>
    </div>
  )
}

export default App
