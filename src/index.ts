import express from "express";

const app = express();

app.get("/", (request, response) => {
  /* response.send("TypeScript"); */
  return response.json({ Message: "Hello TypeScript" });
});
app.listen(3333);
