var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var customerModel = require('../models/customers.model');

/* GET All Customers */
router.get('/list', function (req, res, next) {
  // res.send('respond with a resource');
  customerModel.find(function (err, customerListResponse) {
    if (err) {
      res.send({ status: 500, message: 'Unable to find Customers' });
    } else {
      const recordCount = customerListResponse.length;
      res.send({ status: 200, recordCount: recordCount, results: customerListResponse });
    }
  })
});






/* GET Details of specific Customer */
router.get('/view', function (req, res, next) {

  const userId = req.query.userId;

  customerModel.findById(userId, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: 'Unable to find the Customers' });
    } else {
      res.send({ status: 200, results: customerResponse });
    }
  })
});






/* Create New customer */
router.post('/add', function (req, res, next) {

  let customerObj = new customerModel({
    firstName: 'test1',
    lastName: 'test',
    email: 'test@test.com',
    phone: '1234567890',
    dob: '01-01-2022'
  });

  customerObj.save(function (err, customerObj) {
    if (err) {
      res.send({ status: 500, message: 'Unable to add Customer' });
    } else {
      res.send({ status: 200, message: 'Sucessfully added Customer', customerDetails: customerObj });
    }
  })

});






/* Update existing customer */
router.put('/update', function (req, res, next) {
  const userId = req.query.userId;

  let customerObj = {
    firstName: 'test2',
    lastName: 'test',
    email: 'test@test.com',
    phone: '1234567899896',
    dob: '01-02-2022'
  };

  customerModel.findByIdAndUpdate(userId, customerObj, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: 'Unable to update the Customers' });
    } else {
      res.send({ status: 200, results: customerResponse });
    }
  })
});





/* Delete existing customer */
router.delete('/delete', function (req, res, next) {
  const userId = req.query.userId;

  customerModel.findByIdAndDelete(userId, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: 'Unable to find the Customers' });
    } else {
      res.send({ status: 200, results: customerResponse });
    }
  })
});






/* Search existing customer */
router.get('/search', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
