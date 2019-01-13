const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./'))

app.get('/', (req,res) => 
{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>App Running!</h1>');
});

app.listen(port, () => { console.log(`App running on port ${port}`)});