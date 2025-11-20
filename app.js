const express = require("express");
const app = express();

// Port do Render/Railway cung cấp
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World! This is my first deployed Node.js app!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
