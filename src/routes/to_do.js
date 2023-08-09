const express = require('express')
const controllerToDO = require('../controllers/to_do')
const router = express.Router()

router.post ('/create', controllerToDO.create)
router.get ('/', controllerToDO.get)
router.get ('/:id', controllerToDO.getById)
router.patch ('/update/:id', controllerToDO.update)
router.delete ('/delete/:id', controllerToDO.delete)


module.exports = router
