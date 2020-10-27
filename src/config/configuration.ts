

import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';
const envVars: NodeJS.ProcessEnv = process.env;
const configuration = Object.freeze({
    NODE_ENV: envVars.NODE_ENV ,
    PORT: envVars.PORT,
}) as IConfig;
export default configuration;