const express = require('express')
const router = express.Router()

const {getDB, postDB, putDB, deleteDB} = require('../controllers/CRUD.js')

router.get('/get', getDB)
router.post('/post', postDB)
router.put('/put', putDB)
router.delete('/delete', deleteDB)

module.exports = router