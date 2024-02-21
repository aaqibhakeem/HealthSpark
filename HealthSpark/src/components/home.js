import { useEffect, useState } from "react"

// components
import RecordDetails from "../components/recordDetails.js"
import RecordForm from "../components/recordForm.js"

const Home = () => {
  const [records, setRecords] = useState(null)

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch('/api/records')
      const json = await response.json()

      if (response.ok) {
        setRecords(json)
      }
    }

    fetchRecords()
  }, [])

  return (
    <div className="home">
      <div className="records">
        {records && records.map(record => (
          <RecordDetails record={record} key={record._id} />
        ))}
      </div>
      <RecordForm />
    </div>
  )
}

export default Home