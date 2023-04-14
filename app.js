const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('pages/home')
});

app.listen(3000, () => {
    console.log('serving on port 3000')
})
