# Dentist Appointment System

## Project Setup

To get started with the Dentist Appointment System, you'll need to run both the client and server components. Follow the instructions below to set everything up.

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Make sure you have `npm` (Node Package Manager) available.

### Installation Steps

1. **Open two terminal windows**.

2. **Set up the Client**:
   - In the first terminal, navigate to the client folder:
     ```bash
     cd path/to/your/project/client
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```
   - Start the client application:
     ```bash
     npm run dev
     ```

3. **Set up the Server**:
   - In the second terminal, navigate to the server folder:
     ```bash
     cd path/to/your/project/server
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```
   - Start the server application:
     ```bash
     nodemon server.js
     ```

### Accessing the Application

Once both the client and server are running, you can access the application in your web browser at: http://localhost:5173


### Notes

- Ensure that the server is running on port 8080, and the client is running on port 5173 (or the ports you specified).
- If you encounter any issues, check the terminal for error messages and ensure all dependencies are correctly installed.
