const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Athos Forecast API is running');
});

app.get('/forecast', (req, res) => {
  res.json({
    title: 'Πρόγνωση καιρού Αγίου Όρους',
    text: 'Η πρόγνωση θα ενημερώνεται από εδώ.'
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
