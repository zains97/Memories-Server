import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;
const URI =
  "mongodb+srv://zains97:zain1234@cluster0.maj4y.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
  })
  .catch((ex) => console.log(ex.message));
