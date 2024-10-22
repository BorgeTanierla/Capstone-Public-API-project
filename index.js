import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://programming-quotesapi.vercel.app/api/random";

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {
      content: result.data.quote,
      user: result.data.author,
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server on port ${port}.`);
});
