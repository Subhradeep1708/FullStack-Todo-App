import todoRouter from "./routes/Todo.routes";
import express from "express";
import dbConnect from "./utils/dbConnect";
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(
  cors({
    origin: "*",
  })
);
dbConnect();
app.use(express.json());
app.use("/api/v1/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
