import { useState } from 'react'

const RecordForm = () => {
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const record = {age, height, weight, symptoms}
    
    const response = await fetch('/api/records', {
      method: 'POST',
      body: JSON.stringify(record),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setAge('')
      setHeight('')
      setWeight('')
      setSymptoms('')
      console.log('new record added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h1>Add a New record</h1>

      <label>Age:</label>
      <input 
        type="text" 
        onChange={(e) => setAge(e.target.value)} 
        value={age}
      />

      <label>Height:</label>
      <input 
        type="text" 
        onChange={(e) => setHeight(e.target.value)} 
        value={height}
      />

      <label>Weight:</label>
      <input 
        type="text" 
        onChange={(e) => setWeight(e.target.value)} 
        value={weight} 
      />

      <label>Symptoms:</label>
      <input 
        type="text" 
        onChange={(e) => setSymptoms(e.target.value)} 
        value={symptoms} 
      />

      <button>Add record</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default RecordForm