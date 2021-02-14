const router = require('express').Router() // importing express router
let User = require('../models/user_model')// importing mongoose model

// endpoint that handles incoming http get requests on /user path
router.route('/').get((req,res) => {

    User.find() // mongoose method that returns list of users from mongoDB
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

// endpoint that handles incoming http post requests on /users/add path
router.route('/add').post((req,res) =>{

    const username = req.body.username

    const newUser = new User({username}) // creating a new user

    newUser.save()// inserting a new document into the db
        .then(() => res.json(`Added user with username + ${username}`))
        .catch(err => res.status(400).json('Error: ' + err))

})

module.exports = router