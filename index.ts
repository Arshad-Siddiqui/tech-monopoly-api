import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

// app.use(express.static('../frontend/dist', { index: 'index.html' }));
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});