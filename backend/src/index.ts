import express from "express";
import cors from"cors";


const app = express();
app.use(cors())

app.use(express.json());

app.get("/api/1", (req, res) => {
  res.send("Hello World! this is Ajay");
});
app.get("/api", (req, res) => {
  res.send("Hello World! this is Ajay from /api route");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;