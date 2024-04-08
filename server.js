import express from "express";
import "./config.js";
import "./db-connection.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(
    `📚 Server for LitLines is running on http://localhost:${port} 📚`
  );
});
