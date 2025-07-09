import express from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs'
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:5173',
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}));

app.disable('x-powered-by');


const PORT = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// get the JSON files data
app.get('/mocks/:file', (req, res) => {
  const fileName = req.params.file + '.json';
  const filePath = path.join(__dirname, 'data', fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Si el archivo no existe, responde con datos por defecto
      return res.status(200).json({
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      });
    }
    // Si existe, responde con el contenido del archivo
    res.type('json').send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}/mocks`);
});