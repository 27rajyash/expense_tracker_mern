const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON data in requests

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


