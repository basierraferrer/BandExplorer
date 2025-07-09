import app from './app.mjs';

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}/mocks`);
});