// FileName: index.js

// Import express
let express = require('express')

// Initialize the app
let app = express();
app.enable('trust proxy');

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestApiSever on port " + port);
});

// Add the code below to index.js
// Import routes
let apiRoutes = require("./api-routes")

// Use Api routes in the App
app.use('/api', apiRoutes)