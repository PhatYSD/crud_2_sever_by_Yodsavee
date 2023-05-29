const mongoose = require('mongoose')

const CRUDActionSchema = new mongoose.Schema({
  title : {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  }
});

const CRUDAction = mongoose.model('CRUDAction', CRUDActionSchema)

module.exports = CRUDAction