import app from "./app";

import "dotenv/config";

import "../src/checkConnexion";

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
})
.on("error", (err: Error) => {
    console.error("Error:", err.message);
  });