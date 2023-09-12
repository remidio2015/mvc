import Express, { json } from 'express';
import index from './routes/index.js';

const app = Express ();

app.use(json());
app.use("/", index)

export default app;