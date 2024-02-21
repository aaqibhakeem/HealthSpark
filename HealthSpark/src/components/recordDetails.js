const recordDetails = ({ record }) => {

    return (
      <div className="record-details">
        <p><strong>Age: </strong>{record.age}</p>
        <p><strong>Load (kg): </strong>{record.height}</p>
        <p><strong>Number of reps: </strong>{record.weight}</p>
        <p><strong>Symptoms faced:</strong> {record.symptoms}</p>
      </div>
    )
  }
  
  export default recordDetails