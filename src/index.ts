import * as express from 'express';
import { Request, Response } from 'express';
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple GET route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});