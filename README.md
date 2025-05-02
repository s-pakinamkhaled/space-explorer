#  Space Explorer

**Space Explorer** is a Node.js-based web application that connects to various public space APIs to provide real-time astronomical data. It showcases NASA’s Astronomy Picture of the Day (APOD), the current location of the International Space Station (ISS), and a list of upcoming space launches. This project was developed with modularity, testing, and extensibility in mind.

---

## Overview

This application is composed of three independent services:

- ** Astronomy Picture of the Day (APOD)**: Displays a daily space-themed photo and its description.
- ** ISS Location Tracker**: Provides the real-time latitude and longitude of the ISS.
- ** Upcoming Launches**: Lists the next scheduled rocket launches globally.

Each service is implemented in a dedicated module and fully tested with Jest.

---

##  Setup & Installation

### Prerequisites

- Node.js (v14 or later)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/space-explorer.git
   cd space-explorer
