import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import routes from "./src/routes/acronymRoutes.js"

const app = express();
const PORT = 4002;

//mongoose connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Acronyms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Home page

app.get('/', (req, res) => {
  res.send(`Node and express are running on port ${PORT}.` + '<br/>' + `Fulhaus tech assessment` + '<br/>' + 'use /acronym or /acronym/:acronymID endpoints' + '<br/>' + 'Vladimir Eremenko');
});

// Setup acronyms routes

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
