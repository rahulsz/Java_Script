const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact</h1>");
});

app.get('/files', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/jsonres' , (req,res)=>{
    res.json([
        {
          firstname : 'John',
          lastname : 'Smith',
        },
        {
            firstname : 'John',
            lastname : 'Smith',
        },
    ])
})


app.all('*',(req, res) => {
    res.send("Not found");
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
