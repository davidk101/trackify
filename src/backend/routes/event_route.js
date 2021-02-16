const router = require('express').Router() // importing express router
let Event = require('../models/event_model')// importing mongoose model

// endpoint that handles incoming http get requests on /events path
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

// endpoint that handles incoming http get requests on /events/<id> path
router.route('/:id').get((req,res) => {
    Event.findById(req.params.id) // req.params.id retrieves id from URL
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error: ' + err))
})

// endpoint that handles incoming http delete requests on /events/<id> path
router.route('/:id').delete((req,res) => {
    Event.findByIdAndDelete(req.params.id) // req.params.id retrieves id from URL
        .then(() => res.json('Event deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// endpoint that handles incoming http post requests on /events/update/<id> path
router.route('/update/:id').post((req,res) => {
    Event.findById(req.params.id)
        .then(event => { // returns event object from DB
            event.username = req.body.username
            event.description = req.body.description
            event.duration  = req.body.duration
            event.date = req.body.date

            event.save()
                .then(() => res.json('Event updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })

        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
