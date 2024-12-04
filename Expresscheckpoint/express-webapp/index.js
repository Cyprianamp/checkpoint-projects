const express = require('express');
const app = express();
const path = require('path');

// Custom middleware to check working hours (Monday to Friday, 9 AM to 5 PM)
function checkWorkingHours(req, res, next) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 - Sunday, 1 - Monday, ..., 6 - Saturday
  const currentHour = currentDate.getHours(); // 0 - 23

  // Check if it's between Monday to Friday and between 9 AM and 5 PM
  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
    next(); // Continue to the route handler
  } else {
    res.status(403).send('Sorry, the application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
  }
}

// Use the middleware for all routes
app.use(checkWorkingHours);

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Define routes for each page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
