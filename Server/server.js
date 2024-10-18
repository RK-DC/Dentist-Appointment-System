// Library Import
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Load Environment Variable
dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT || 8080;

// Middleware
// Allow requests from the front-end port
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(bodyParser.json());

// Route Import:
import authRoutes from "./routes/authRoutes.js";

//Routing
app.use("/auth", authRoutes);

//Port Config
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
