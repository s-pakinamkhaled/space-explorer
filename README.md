#  Space Explorer

A Node.js web application that connects with various public space APIs to deliver up-to-date astronomical data, ISS tracking, and upcoming launch information. Built with modular services and tested using Jest.

##  Features

- **Astronomy Picture of the Day (APOD)**: Displays daily images and explanations from NASA.
- **ISS Tracker**: Fetches real-time location of the International Space Station.
- **Upcoming Launches**: Lists upcoming rocket launches using the SpaceDev API.

##  Project Structure
space-explorer/
├── services/
│ ├── apodService.js
│ ├── issService.js
│ └── launchService.js
├── tests/
│ ├── apodService.test.js
│ ├── issService.test.js
│ └── launchService.test.js
├── server.js
├── package.json
