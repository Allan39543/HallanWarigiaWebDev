const express=require("express")
const EventCont=require('../controllers/events.controller')
const router=express.Router()

router.post('/event',EventCont.eventsCont)

router.get('/all',EventCont.getAllEvents)

router.get('/userEvents',EventCont.getEventsByOrganiser)

router.delete('/deleteEvent',EventCont.deleteEventById)

router.get('/abtevents',EventCont.getAbtEvent)


module.exports=router