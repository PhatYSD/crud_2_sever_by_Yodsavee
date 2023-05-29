const CRUDAction = require('../DB/CRUDAction.js')

const getDB = (req, res) => {
  CRUDAction.find()
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
}

const postDB = (req, res) => {
  const { title, description } = req.body
  
  if (!!title && !!description) {
    CRUDAction.create({ title, description })
      .then(result => res.status(200).json(result))
      .catch(err => console.log(err))
  } else {
    res.status(401).json({message: 'Error'})
  }
}

const putDB = (req, res) => {
  const { _id, title, description } = req.body

  if (!!_id) {
    CRUDAction.findByIdAndUpdate(_id, {title, description})
      .then(result => res.status(200).json({message: result, changeTo: {
        _id,
        title,
        description
      }}))
      .catch(err => res.status(500).json({message: err}))
  } else {
    res.status(404).json({message: 'Not Found ID'})
  }
}

const deleteDB = (req, res) => {
  const { _id } = req.body

  if (!!_id) {
    CRUDAction.findByIdAndRemove(_id)
      .then(result => res.status(200).json({message: 'Ok Delete'}))
      .catch(err => res.status(404).json({message: err}))
  } else {
    res.status(404).json({message: 'Not Found ID'})
  }
}

module.exports = {getDB, postDB, putDB, deleteDB}