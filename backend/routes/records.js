const express = require('express')
const router = express.Router()

const {
    getRecords, 
    getRecord, 
    createRecord, 
    deleteRecord, 
    updateRecord
  } = require('../controllers/recordController')

  // GET all Records
  router.get('/', getRecords)
  
  // GET a single Record
  router.get('/:id', getRecord)
  
  // POST a new Record
  router.post('/', createRecord)
  
  // DELETE a Record
  router.delete('/:id', deleteRecord)
  
  // UPDATE a Record
  router.patch('/:id', updateRecord)
  
  module.exports = router