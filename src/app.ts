import express from "express";
import environment from "./config/environment";

const app = express();
const PORT = environment.PORT;

app.listen(PORT, () => {
  console.log(`*** Server listening on port ${PORT} ***`);
});
