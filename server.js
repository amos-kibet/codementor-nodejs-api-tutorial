var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

// Connecting to mongodb
mongoose.connect('mongodb+srv://User_1:07049374@cluster0.esfo1.mongodb.net/localdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connected to Mongodb Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to Mongodb Atlas!');
        console.error(error);
    });

// bodyParser code
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); // Importing route
routes(app); // registering the route

// Express middleware for error handling
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful server started on port:' + port);