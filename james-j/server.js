'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
// Public and Private files for the site are required to keep access restrictions for standard user to admin users. We want the users to have the ability to access the public side of the side but not the private.
app.use(express.urlencoded({ extended: true}));
app.use(express.static('./public'));
app.get('/new-article', (req, res) => {
  res.sendFile('new.html', { root: './public' });
})
app.use((req, res) => {
  res.status(404).send('404 error');
})

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
})

app.listen(PORT, () => console.log('Listening'));
