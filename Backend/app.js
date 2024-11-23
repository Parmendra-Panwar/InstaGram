const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // Parse incoming JSON requests

let Data = [
  {
    "id": "j62pl9zxr",
    "title": "Art Day",
    "body": "Spent hours painting today. It's so therapeutic. Anyone else into art therapy?",
    "reactions": 16,
    "userId": "user-2",
    "tags": ["art", "therapy", "painting"]
  },
  {
    "id": "k83nx5yzt",
    "title": "Birthday Bash",
    "body": "Had an amazing birthday celebration with my close friends. Thank you for the love!",
    "reactions": 40,
    "userId": "user-4",
    "tags": ["birthday", "party", "celebration"]
  },
  {
    "id": "l58qm2xks",
    "title": "Music Practice",
    "body": "Finally nailed a tough piece on the piano. Practice really does make perfect!",
    "reactions": 19,
    "userId": "user-3",
    "tags": ["music", "piano", "practice"]
  },
  {
    "id": "m71jb9pzw",
    "title": "City Lights",
    "body": "Explored the downtown area at night. The city lights are so vibrant and alive!",
    "reactions": 23,
    "userId": "user-6",
    "tags": ["city", "nightlife", "explore"]
  },
  {
    "id": "n94pt3wqy",
    "title": "First Marathon",
    "body": "Completed my first marathon today! Feeling super accomplished and sore. Thanks for the support!",
    "reactions": 35,
    "userId": "user-7",
    "tags": ["marathon", "fitness", "achievement"]
  },
  {
    "id": "o63kl7yrp",
    "title": "DIY Crafts",
    "body": "Made some cool DIY home decorations today. Crafting is such a relaxing hobby.",
    "reactions": 11,
    "userId": "user-8",
    "tags": ["DIY", "crafts", "home"]
  },
  {
    "id": "p82xl9pmq",
    "title": "Photography Walk",
    "body": "Went on a photo walk around the park. Captured some stunning shots of nature!",
    "reactions": 21,
    "userId": "user-9",
    "tags": ["photography", "nature", "walk"]
  },
]

app.get("/", (req, res) => {
  res.send("HI Buddy This Server Is for Your Insta Project")
})

app.get("/api/posts", (req, res) => {
  const { limit = 100 } = req.query;
  res.json(Data.slice(0, limit));
});

// POST route to add data
app.post("/api/posts", (req, res) => {
  const postData = req.body;

  if (!postData.id || !postData.title || !postData.body) {
    return res.status(400).json({ error: "Missing required fields!" });
  }

  Data = [...Data, postData];
  res.status(201).json({ message: "Post added successfully!", postData });
});


app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging
  res.status(500).json({ error: "Internal Server Error" }); // Respond with error message
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});