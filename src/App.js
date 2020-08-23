import React, { useEffect, useState }  from 'react'
import api from './services/api'

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([])

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      "title": "analytics_adapter",
      "url": "github.com/elife/analytics_adapter",
      "techs": ["java"]
    })

    setRepositories([...repositories, response.data])
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => {
          return (
            <li key={repository.id}>
             {repository.title}  
            <button onClick={() => handleRemoveRepository(1)}>
              Remover
            </button>
          </li>
          )
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
