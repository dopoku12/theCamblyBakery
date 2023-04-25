const PORT = process.env.PORT || 3000;
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!!');
})

app.listen(PORT, () => {
    console.log(`listening on Port... ${PORT}`)
})