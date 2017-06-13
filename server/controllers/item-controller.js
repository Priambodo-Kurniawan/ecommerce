'use strict'
var Item = require('../models/items')

var findAll = (req, res) => {
  Item.find({})
  .then((items)=>{
    res.send(items)
  })
  .catch((err)=>{res.send(err)})
}

var findLatest = (req, res) => {
  Item.find({})
  .limit(6)
  .then((item)=>{
    var latest = []
    for (var i = 0; i < item.length; i+=2) {
      if(item[i+1] !== undefined){
        latest.push([item[i], item[i+1]])
      }
    }
    res.send(latest)
  })
  .catch((err)=>{res.send(err)})
}

var newItem = (req, res) => {
  if(req.body.imageLink==null){
    req.body.imageLink = 'http://placehold.it/500x500'
  }
  req.body.createdAt = new Date()
  Item.create(req.body)
  .then(()=>{
    res.send('New Item has been added')
  })
  .catch((err)=>{res.send(err)})
}

var deleteItem = (req, res) => {
  let id = req.params.id
  Item.deleteOne({_id: id})
  .then(()=>{
    res.send('Item has been deleted')
  })
  .catch((err)=>{res.send(err)})
}

var getOneItem = (req, res) => {
  let id = req.params.id
  Item.find({_id: id})
  .then((item)=>{
    res.send(item)
  })
  .catch((err)=>{res.send(err)})
}

var updateItem = (req, res) => {
  let id = req.params.id
  Item.update({_id: id}, req.body)
  .then(()=>{
    res.send('item has been updated')
  })
  .catch((err)=>{res.send(err)})
}

module.exports = {
  findAll,
  findLatest,
  newItem,
  deleteItem,
  getOneItem,
  updateItem
}
