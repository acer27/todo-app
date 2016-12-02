var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
   details: {
       type: String,
       required: true,
       default: 'New Task ' + Date.now
   },
   dateAdded: {
       type: Date,
       default: Date.now
   },
   isComplete: {
       type: Boolean,
       default: false
   },
   dateCompleted: {
       type: Date
   }
});


module.exports = mongoose.model('Task', taskSchema);