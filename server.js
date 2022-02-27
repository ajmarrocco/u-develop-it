// import epxress
const express = require('express');

// add port designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// starts express.js server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});