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
    text: 'text: 'Δοκιμαστική πρόγνωση: σήμερα το σύστημα ενημερώνεται αυτόματα από το Railway API και εμφανίζεται ζωντανά στη Webnode.''
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
