const express = require("express")
const UsersCont = require('../controllers/users.controller')
const verifyCont = require('../controllers/users.verify')
const router = express.Router()

router.post('/users', UsersCont.userCont)

router.get('/verify', UsersCont.userVerifyCont)

router.get('/allUsers', UsersCont.getAllUsers)

router.delete('/deleteUser', UsersCont.deleteUserById)

router.put('/UpdateUsers', UsersCont.updateUser)



module.exports = router