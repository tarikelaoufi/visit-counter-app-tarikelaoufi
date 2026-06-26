const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

let visitCount = 0;

app.get("/", (req, res) => {
  visitCount++;

  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Compteur de visites</title>

        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f2f5f9;
            min-height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card {
            width: 420px;
            padding: 40px;
            text-align: center;
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          }

          h1 {
            color: #24292f;
          }

          .counter {
            margin: 25px 0;
            font-size: 64px;
            font-weight: bold;
            color: #0078d4;
          }

          .status {
            padding: 12px;
            background: #e8f5e9;
            border-radius: 10px;
            color: #1b5e20;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>Compteur de visites:</h1>
          <h2>Réalisé  par Traik EL AOUFI</h2>

          <p>Nombre de visites :</p>

          <div class="counter">${visitCount}</div>

          <div class="status">
            Application Node.js prête pour Azure
          </div>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    visits: visitCount
  });
});

app.listen(port, () => {
  console.log(`Application démarrée sur http://localhost:${port}`);
});