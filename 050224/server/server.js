// const http = require("http");

// const { app } = require("./backend");

// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log("Server is currently running!");
// });




// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.get('/api/data', (req, res) => {

});


//-----------------
const Product = require('./models/Product');

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//---------------------


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


