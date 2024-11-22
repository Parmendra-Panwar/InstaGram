const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" }));

const Data = [
  {
    "id": "z73js9qnp",
    "title": "Exploring the Alps",
    "body": "The snowy peaks were breathtaking! Can't wait to go again. Want to join next time?",
    "reactions": 12,
    "userId": "user-5",
    "tags": ["adventure", "travel", "mountains"]
  },
  {
    "id": "a83lx7yqo",
    "title": "Weekend Baking",
    "body": "Tried my hand at baking cookies this weekend. They turned out amazing! Recipe coming soon.",
    "reactions": 18,
    "userId": "user-3",
    "tags": ["baking", "cookies", "fun"]
  },
  {
    "id": "b29mg6rkd",
    "title": "Game Night Fun",
    "body": "Played some epic board games with friends last night. Monopoly was intense!",
    "reactions": 25,
    "userId": "user-4",
    "tags": ["games", "fun", "friends"]
  },
  {
    "id": "c84xy9pjw",
    "title": "Beach Day Out",
    "body": "Spent the whole day soaking up the sun and waves. The beach is my happy place!",
    "reactions": 30,
    "userId": "user-2",
    "tags": ["beach", "summer", "relax"]
  },
  {
    "id": "d65lk2aqr",
    "title": "Movie Marathon",
    "body": "Watched three classics in one sitting. Which movies do you recommend for the next binge?",
    "reactions": 14,
    "userId": "user-6",
    "tags": ["movies", "classic", "entertainment"]
  },
  {
    "id": "e92jg5ktd",
    "title": "Gardening Joy",
    "body": "Planted some new flowers today. The garden looks more colorful than ever!",
    "reactions": 9,
    "userId": "user-7",
    "tags": ["gardening", "flowers", "nature"]
  },
  {
    "id": "f47mn6uzp",
    "title": "Coding All Night",
    "body": "Pulled an all-nighter to finish a project. Coffee kept me alive! Any tips to stay awake?",
    "reactions": 20,
    "userId": "user-8",
    "tags": ["coding", "projects", "life"]
  },
  {
    "id": "g39yk8xtr",
    "title": "Camping Adventures",
    "body": "The starry night sky was mesmerizing. Camping is the best way to disconnect from the world.",
    "reactions": 22,
    "userId": "user-9",
    "tags": ["camping", "adventure", "nature"]
  },
  {
    "id": "h28wp4mlq",
    "title": "New Recipe Experiment",
    "body": "Tried making sushi at home for the first time. It was a messy but delicious experience!",
    "reactions": 17,
    "userId": "user-1",
    "tags": ["cooking", "sushi", "experiment"]
  },
  {
    "id": "i75vc7pkj",
    "title": "Morning Run",
    "body": "The sunrise today was incredible during my run. A great way to start the day!",
    "reactions": 13,
    "userId": "user-10",
    "tags": ["running", "fitness", "morning"]
  },
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
  {
    "id": "q41wk8zyr",
    "title": "New Book",
    "body": "Just started reading a new mystery novel. Can't put it down! Any recommendations for next?",
    "reactions": 10,
    "userId": "user-1",
    "tags": ["books", "reading", "mystery"]
  },
  {
    "id": "r35xj7qnp",
    "title": "Family Time",
    "body": "Spent the evening with family over dinner and laughter. These moments are priceless.",
    "reactions": 28,
    "userId": "user-5",
    "tags": ["family", "dinner", "love"]
  },
  {
    "id": "s98pl6yxz",
    "title": "Learning Guitar",
    "body": "Finally got the chords for my favorite song right! Guitar practice is paying off.",
    "reactions": 15,
    "userId": "user-10",
    "tags": ["guitar", "music", "learning"]
  }
]

app.get("/api/posts", (req, res) => {
  const { limit = 10 } = req.query; // Support pagination with limit query
  res.json(Data.slice(0, limit)); // Respond with a limited number of posts
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging
  res.status(500).json({ error: "Internal Server Error" }); // Respond with error message
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});