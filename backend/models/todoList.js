//todoList.js 

const mongoose = require('mongoose'); 

const todoSchema = new mongoose.Schema({ 
	task: { 
		type: String, 
		required: true, 
	}, 
	status: { 
		type: String, 
		required: true, 
	}, 
	deadline: { 
		type: Date, 
	}, 
}); 


const todoList = mongoose.model("Cluster0", todoSchema); 

module.exports = todoList;
