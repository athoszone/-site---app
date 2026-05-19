const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const forecast = {
  day: "Τετάρτη 20 Μαΐου 2026",
  icon: "🌦️",
  title: "Γενική Πρόγνωση Καιρού – Άγιον Όρος",
  weather: "Νεφελώδης με ασθενείς βροχές",
  tempMin: 11,
  tempMax: 22,
  humidityMin: 61,
  humidityMax: 87,
  winds: "Βόρειοι – Βορειοδυτικοί 3–4 Μποφόρ",
  ports: "Δεν διαφαίνεται πρόβλημα στα λιμάνια",
  text: `
Η Τετάρτη θα ξεκινήσει με νεφελώδη καιρό, ενώ τις πρωινές έως και τις προμεσημβρινές ώρες αναμένονται ασθενείς βροχές ή τοπικές μπόρες. Στη συνέχεια τα φαινόμενα θα περιοριστούν και η ορατότητα θα βελτιωθεί σταδιακά.

Η θερμοκρασία θα κυμανθεί από περίπου 11°C νωρίς το πρωί έως 22°C το μεσημέρι και νωρίς το απόγευμα, κυρίως μεταξύ 13:00–16:00. Η υγρασία θα κινηθεί περίπου από 61% έως 87%, με υψηλότερες τιμές κατά τις ώρες της βροχής.

Οι άνεμοι θα πνέουν από βόρειες έως βορειοδυτικές διευθύνσεις, ασθενείς έως σχεδόν μέτριοι 3–4 Μποφόρ, με ενδεικτικές ταχύτητες περίπου 10–30 km/h. Από το απόγευμα θα στραφούν σε δυτικούς έως βορειοδυτικούς, ασθενείς περίπου 3 Μποφόρ.

Δεν διαφαίνεται κάποιο σοβαρό πρόβλημα στη λειτουργία των λιμανιών. Κατά τις ώρες της βροχής χρειάζεται προσοχή σε ολισθηρά σημεία, κυρίως σε δρόμους και μονοπάτια.
`
};

app.get("/", (req, res) => {

  res.send(`
  <!DOCTYPE html>
  <html lang="el">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Athos Zone Weather API</title>
  </head>
  <body style="font-family: Arial; background:#f0f8ff; padding:40px; text-align:center;">

    <h1>${forecast.icon} ${forecast.title}</h1>

    <h2>${forecast.day}</h2>

    <p><strong>${forecast.weather}</strong></p>

    <p>
      Θερμοκρασία:
      ${forecast.tempMin}°C έως ${forecast.tempMax}°C
    </p>

    <p>
      Υγρασία:
      ${forecast.humidityMin}% έως ${forecast.humidityMax}%
    </p>

    <p>${forecast.winds}</p>

    <p>${forecast.ports}</p>

    <hr style="margin:30px 0;">

    <p>
      JSON endpoint:
      <a href="/forecast">/forecast</a>
    </p>

  </body>
  </html>
  `);

});

app.get("/forecast", (req, res) => {
  res.json(forecast);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Athos Zone Weather API running on port ${PORT}`);
});
