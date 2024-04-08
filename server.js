import "./config.js";
import "./db-connection.js";

import express from "express";
import cors from "cors";

import { errorResponder } from "./middleware/errorHandling.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// CORS

const allowedOrigins = ["http://localhost", "https://litlines.onrender.com"];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("origin:", origin);
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// TEST RESPONSE

app.get("/", (req, res) => {
  res.send("server is running");
});

// ERROR HANDLING

app.use(errorResponder);

// RUN SERVER

app.listen(port, () => {
  console.log(
    `📚 Server for LitLines is running on http://localhost:${port} 📚`
  );
});
