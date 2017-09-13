const express = require('express')
const Place   = require('../models/Place')
const router  = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.render('index', {places})
      console.log(places)
    })
})

router.post('/', (req, res, next) => {
  const newPlace = {
    name: req.body.name,
    description: req.body.description,
    kind: req.body.kind,
    location: {
      type: 'Point',
      coordinates: [req.body.lat, req.body.lng]
    }
  }

  new Place(newPlace)
    .save()
    .then(res.redirect('/'))
    .catch(err => console.log(err))
})


module.exports = router
