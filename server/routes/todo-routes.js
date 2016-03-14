/* ============================================================================
	Server side Routing
	Route Definitions

============================================================================ */
'use strict';

//Get the Mongoose Model
var TodoModel = require('../models/mongSchemaModel');

module.exports = {
    /* ========================================================================
    CREATE - $http post
    ======================================================================== */
    createTodo:function(req, res) {
        //create a todo, information comes from AJAX request from Angular
        TodoModel.create({
        	text : req.body.text,
        	done : false
		},
		function(err, todo) {
			if (err) {
				res.send(err);
			};

			//get and return all the todos after you create another
			TodoModel.find(function(err, todos) {
				if (err) {
					return res.send(err);
				}
				else {
					return res.json(todos);
				};
			});
		});
    },

    /* ========================================================================
    READ - $http get
    ======================================================================== */
    getTodos : function(req, res) {
        //use mongoose to get all todos in the database
        TodoModel.find(function(err, todos) {
            //On error send the error. 
            if (err) {
            	return res.send(err);
            }
            else {
                return res.json(todos); //return all todos in JSON format
			};
		});
    },

	/* ========================================================================
	UPDATE - $http put
	======================================================================== */
    updateTodo:function(req, res) {
	    var query = { "_id" : req.params.todo_id };
        var update = {text: req.body.text, done: req.body.done};
        var id = req.params.todo_id;

        TodoModel.findByIdAndUpdate(id ,update, function(err, todo) {
			
            if (err) {
                res.send(err);
            };
			// get and return all the todos after you Update one
            TodoModel.find(function(err, todos) {
			    if (err) {
			        return res.send(err);
			    }
			    else {
			        return res.json(todos);
			    };
			});
		});
	},

    /* ========================================================================
    DELETE - $http delete
    ======================================================================== */
	deleteTodo : function(req, res) {
	    TodoModel.remove({
	        _id : req.params.todo_id
		},

		function(err, todo) {
		    if (err) {
		    	res.send(err);
		    };

		    //get and return all the todos after you delete one
		    TodoModel.find(function(err, todos) {
		        if (err) {
		    	    res.send(err)
		        };
				res.json(todos);
			});
		});
	}
};