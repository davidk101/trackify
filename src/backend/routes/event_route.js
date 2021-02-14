const router = require('express').Router() // importing express router
let Event = require('../models/event_model')// importing mongoose model

// endpoint that handles incoming http get requests on /event path
router.route('/').get((req, res) =>{
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err))
})

// endpoint that handles incoming http post requests on /event/add path
router.route('/add').post((req,res) =>{
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newEvent = new Event({
        username, description, duration, date
    })

    newEvent.save()// inserting a new document into the db
        .then(() => res.json(`Event added with username + ${username}`))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
