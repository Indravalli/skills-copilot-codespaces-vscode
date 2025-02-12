// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
let comments = [];

// Create a new comment
app.post('/comments', (req, res) => {
  // Get content from request body
  let content = req.body.content;
  // Get author from request body
  let author = req.body.author;
  // Create a new comment object
  let newComment = {
      content: content,
      author: author
    };
    res.status(201).send(newComment);
});