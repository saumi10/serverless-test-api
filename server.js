const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const DELAY_MS = 3 * 60 * 1000; // 3 minutes

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'serverless-test-api is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/delay', (req, res) => {
  const start = Date.now();
  setTimeout(() => {
    res.json({
      status: 'ok',
      requestedDelayMs: DELAY_MS,
      actualDelayMs: Date.now() - start,
    });
  }, DELAY_MS);
});

app.listen(PORT, () => {
  console.log(`serverless-test-api listening on port ${PORT}`);
});
