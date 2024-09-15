const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //Set port to env-variable or use 3000

app.get('/', (req, res) => {
    res.send('Successful response.');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
// app.listen(3000, () => console.log('Example app is listening on port 3000.'));