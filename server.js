import "./config.js";
import "./db-connection.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { usersMainPath, usersRouter } from "./routes/usersRoutes.js";
import { booksRouter, booksMainPath } from "./routes/booksRoutes.js";
import { postsRouter, postsMainPath } from "./routes/postsRoutes.js";
import {
  errorResponder,
  invalidPathHandler,
} from "./middleware/errorHandling.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

// CORS

const allowedOrigins = [
  "http://localhost",
  "https://litlines.onrender.com",
  "http://localhost:5173",
];

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

// Middleware to log the method and path of each request, and the body of POST requests
app.use((req, res, next) => {
  console.log(`current request infos: ${req.method}  ${req.path}`);
  if (req.method !== "GET") {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
  }
  console.log("\n");
  next();
});

// ROUTES

app.use(usersMainPath, usersRouter);
app.use(booksMainPath, booksRouter);
app.use(postsMainPath, postsRouter);

// ERROR HANDLING
app.use(invalidPathHandler);
app.use(errorResponder);

// RUN SERVER

app.listen(port, () => {
  console.log(
    `📚 Server for LitLines is running on http://localhost:${port} 📚 hihi`
  );
});
