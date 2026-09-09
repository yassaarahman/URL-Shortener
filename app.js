import express from "express";
import { route } from "./routes/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
