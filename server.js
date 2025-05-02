const express = require('express');
const fetchAPOD = require('./services/apodService');
const trackISS = require('./services/issTracker');
const fetchLaunches = require('./services/launchService');

const app = express();
const PORT = 3000;

app.get('/apod', fetchAPOD);
app.get('/iss', trackISS);
app.get('/launches', fetchLaunches);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
