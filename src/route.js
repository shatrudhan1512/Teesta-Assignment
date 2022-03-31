const express = require('express')
const router = express.Router()
const createSheetController = require('./controller')

router.post('/excelSheet',createSheetController.createSheet)


module.exports = router