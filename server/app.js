const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Farmingo App ENDPOINT');
})

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
})