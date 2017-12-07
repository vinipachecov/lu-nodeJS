var Todos = require('../models/todoModel');


module.exports = function (app) {

    app.get('/api/setupTodos', function (req, res) {

        var starterTodos = [{
                username: 'john',
                todo: 'buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'john',
                todo: 'sell milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'john',
                todo: 'Clean Bathroom',
                isDone: true,
                hasAttachment: false
            },
        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        });
    })
}