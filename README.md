# Contdown Timer and World clock

Welcome to the Countdown Timer and World Clock App! This application allows you to set countdown timers and view the current time in different world time zones.

Live link - https://university-living-assignment-kni5oysdx-arunkr741.vercel.app/

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Running Locally](#running-locally)
  - [Docker](#docker)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) installed (v18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager) installed
- [Docker](https://www.docker.com/) installed (if using Docker)

## Getting Started

### Running Locally

To run the App locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd university_living_assignment
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
4. Build the Next.js application:
   ```bash
   npm run build
   ```

Open your web browser and access the app at http://localhost:3000.

## Docker
Alternatively, you can run the Contdown Timer and World clock App using Docker. A Dockerfile is provided for easy containerization.

1. Build the Docker image:
   ```bash
   docker build -t my-nextjs-app .
   ```
2. Run the Docker container:
   ```bash
   docker run -d -p 3000:3000 --name my-nextjs-container my-nextjs-app
   ```

## Usage
   - Set countdown timers by entering a start time and clicking the "Start" button.
   - Add or remove timers from the list.
   - View the progress of each countdown timer.
   - Select a time zone between PST and IST for the World Clock.
   - The app will retrieve the internet time for the chosen time zone.
   - The World Clock displays the time and updates every minute.
   - Have fun managing your timers and exploring different world times!

