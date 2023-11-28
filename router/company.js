const express = require('express');
const router = express.Router();

const companycontroller = require('../controllers/companies')

router.get('/companies', companycontroller.index)

router.get('/company/:id', companycontroller.show)

router.get('/company/city/:lokasi', companycontroller.showcity)

router.post('/company', companycontroller.store)

router.put('/company/:id', companycontroller.update)

router.delete('/company/:id', companycontroller.delete)

module.exports = router;