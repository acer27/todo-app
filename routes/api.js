var express = require('express');
var router = express.Router();

var Task = require('../models/task');

// api/todo
router.get('/todo', function(req, res) {
    Task.find({}, function(err, tasks) {
       if (err) 
           res.status(403)
              .send({message: 'There was an error connecting to the database.'});
       
       if (tasks === null) 
           res.status(404)
              .send({message: 'No results returned.'});
        
       res.status(200)
          .send(tasks);
    });
});

// api/todo/:id
router.get('/todo/:id', function(req, res) {
   Task.findOne({_id: req.params.id}, function(err, task) {
      if (err)
        res.status(403)
           .send({message: 'Error on DB'});
           
      if (task === null)
        res.status(404)
           .send({message: 'Resource not found'});
           
      res.status(200)
           .send(task);
   }); 
});

// api/todo/ -POST
router.post('/todo', function(req, res) {
    var task = new Task({
        details: req.body.details
    });
    task.save(function(err, result) {
        if (err) 
            res.status(404).send({message: 'Error encountered.'});
        
        if (result == null) 
            res.status(403).send({message: 'Failed to save Task'});
        
        // if task is saved successfully
        res.status(201).send(result);
    });
});

// api/todo/:id -UPDATE
router.put('/todo/:id', function(req, res) {
    
});

module.exports = router;
