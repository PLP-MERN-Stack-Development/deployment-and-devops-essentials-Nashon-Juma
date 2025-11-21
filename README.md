# RoboCorp Innovations Website

This repository contains the frontend and backend code for RoboCorp Innovations, a company dedicated to pioneering the future of robotics. The website showcases our vision, products, and contact information.

## Project Overview

The application is built using a MERN (MongoDB, Express.js, React.js, Node.js) stack:
- **Frontend**: Developed with React, providing an interactive user interface for showcasing RoboCorp's products and services.
- **Backend**: Built with Express.js and Node.js, handling API requests and managing data persistence with MongoDB.

## Features

- **Robotics Company Information**: Details about RoboCorp Innovations, its mission, and vision.
- **Product Showcase**: Sections dedicated to various robot models, including Industrial Automation Bots, Service & Logistics Drones, and Exploration Rovers.
- **Contact Information**: Easy access for inquiries and collaborations.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn (v1.22 or higher)
- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Nashon-Juma.git
cd deployment-and-devops-essentials-Nashon-Juma
```

### 2. Backend Setup

Navigate to the `backend` directory, install dependencies, and start the server.

```bash
cd backend
npm install
# Create a .env file based on .env.example with your MongoDB URI
cp .env.example .env
# Edit .env and set MONGO_URI, e.g., MONGO_URI="mongodb://localhost:27017/robocorps_db"
npm start
```

The backend server will run on `http://localhost:5000` (or the PORT specified in your `.env` file).

### 3. Frontend Setup

In a new terminal, navigate to the `frontend` directory, install dependencies, and start the React development server.

```bash
cd frontend
npm install
npm start
```

The frontend application will open in your browser, typically at `http://localhost:3000`.

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose ODM)

## Deployment

*(This section can be updated with actual deployment details once deployed)*

## Contributing

Feel free to fork the repository and contribute.

## License

MIT
