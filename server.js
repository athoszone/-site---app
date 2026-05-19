const express = require('express');
const app = express();
app.get('/forecast', (req, res) => { res.send('Η πρόγνωσή σου εδώ'); });
app.listen(3000, () => console.log('API running on port 3000'));