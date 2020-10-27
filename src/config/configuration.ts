

import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';
const envVars: NodeJS.ProcessEnv = process.env;
const configuration: IConfig = Object.freeze({
    NODE_ENV: process.env.NODE_ENV ,
    PORT: process.env.PORT,
});
console.log('config is', configuration);
export default configuration;