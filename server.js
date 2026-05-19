const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

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
