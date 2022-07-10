const asyncHandler = require('express-async-handler')

const Event = require('../models/eventModel')
const User = require('../models/userModel')

// @desc Get event 
// @route   GET/api/events
//@access Private

const getEvents = asyncHandler( async (req, res) => {

    const events = await Event.find({user:req.user.id})
    
    res.status(200).json(events)
})

// @desc Set event
// @route POST/api/event
//@access Private

const setEvent = asyncHandler(async  (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add a text field')
        
    }
    if(!req.body.location){
        res.status(400)
        throw new Error ('Please add a location field')
    
    }
    if(!req.body.imageurl){
        res.status(400)
        throw new Error ('Please add an image url field')
    }
    if(!req.body.website){
        res.status(400)
        throw new Error ('Please add a website field')
    }
    // if(!req.body.date){
    //     res.status(400)
    //     throw new Error ('Please add a date field')
    // }

    const event = await Event.create({
        text : req.body.text,
        user : req.user.id,
        location : req.body.location,
        imageurl : req.body.imageurl,
        website : req.body.website
    })
    
    res.status(200).json(event)
})

// @desc Update event
// @route PUT/api/event
// @access  Private

const updateEvent = asyncHandler(async (req,res)=>{

    const event = await Event.findById(req.params.id)

    if(!event){
        res.status(400)
        throw new Error('event Not Found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if (event.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedevent = await Event.findByIdAndUpdate(req.params.id, req.body,  {
        new:true,
    })

    res.status(200).json(updatedevent)
})

//  @desc Delete event
// @route DELETE/api/event
// @access Private

const deleteEvent = asyncHandler(async (req,res) => {
    const event = await Event.findById(req.params.id)

    if(!event){
        res.status(400)
        throw new Error('Event Not Found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if (event.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await event.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getEvents,
    setEvent,
    updateEvent,
    deleteEvent
};