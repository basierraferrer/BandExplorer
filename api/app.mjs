import express from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());
// Read accepted origins from environment variable, fallback to localhost if not set

const ACCEPTED_ORIGINS = ['http://localhost:5173','https://band-explorer-ui.vercel.app'];

app.use(cors({
  origin: (origin, callback) => {
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  }
}));
app.disable('x-powered-by');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/mocks/:file', (req, res) => {
  const fileName = req.params.file + '.json';
  const filePath = path.join(__dirname, 'data', fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(200).json({
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      });
    }
    res.type('json').send(data);
  });
});

export default app; 