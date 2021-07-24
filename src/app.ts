/**
 * Required External Modules
 */
import express from 'express';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import chalk from 'chalk';

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Route
 */
app.use('/', (req, res) => {
  res.json({
    hi: 'hi typescript'
  });
});

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(
    `Listening on port ${chalk.yellowBright(`http://127.0.0.1:${PORT}`)}`
  );
});
