import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.info(`Example app listening on port http://localhost:${port}`);
});
