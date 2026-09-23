const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
// const DELAY_MS = 3 * 60 * 1000; // 3 minutes

const DUMMY_API_KEY = "SH4JSh8mErJHRJbbVu";

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'serverless-test-api is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.post('/data', (req, res) => {
  const { api_key } = req.body || {};

  if (api_key !== DUMMY_API_KEY) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  res.json({
    status: 'ok',
    dummy: true,
    data: 'This is a dummy response from serverless-test-api',
  });
});



// app.get('/delay', (req, res) => {
//   const start = Date.now();
//   setTimeout(() => {
//     res.json({
//       status: 'ok',
//       requestedDelayMs: DELAY_MS,
//       actualDelayMs: Date.now() - start,
//     });
//   }, DELAY_MS);
// });

app.listen(PORT, () => {
  console.log(`serverless-test-api listening on port ${PORT}`);
});
