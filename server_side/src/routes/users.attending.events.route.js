const express = require("express")
const router = express.Router()
const AttendEventsCont = require('../controllers/users.attending.events.controller')


router.post('/attend', AttendEventsCont.attendEventCont)

router.post('/save', AttendEventsCont.savedEventCont)

router.get('/attend', AttendEventsCont.getYourEvents)

router.get('/save', AttendEventsCont.getSavedEvents)


module.exports = router


