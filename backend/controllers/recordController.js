const Record = require('../models/recordModel')
const mongoose = require('mongoose')

// get all records
const getRecords = async (req, res) => {
  const records = await Record.find({}).sort({createdAt: -1})
  res.status(200).json(records)
}

// get a single record
const getRecord = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such record'})
  }

  const record = await Record.findById(id)

  if (!record) {
    return res.status(404).json({error: 'No such record'})
  }

  res.status(200).json(record)
}

// create a new record
const createRecord = async (req, res) => {
  const {title, load, reps} = req.body

  // add to the database
  try {
    const record = await Record.create({ title, load, reps })
    res.status(200).json(record)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a record
const deleteRecord = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such record'})
    }

    const record = await Record.findOneAndDelete({_id: id})

    if(!record) {
        return res.status(400).json({error: 'No such record'})
    }

    res.status(200).json(record)
}

// update a record
const updateRecord = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such record'})
    }

    const record = await Record.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!record) {
        return res.status(400).json({error: 'No such record'})
    }

    res.status(200).json(record)
}

module.exports = {
  getRecords,
  getRecord,
  createRecord,
  deleteRecord,
  updateRecord
}