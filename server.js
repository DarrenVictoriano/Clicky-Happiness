// Initialize Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Iniitalize Mongoose and Routes


// Define Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static asset (when deployed in heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes for API and View


// Connect to MongoDB


// Start the API server
app.listen(PORT, function () {
    console.log("Server running on https://localhost:" + PORT);
});