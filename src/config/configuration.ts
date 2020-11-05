

import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';
const envVars: NodeJS.ProcessEnv = process.env;
const configuration: IConfig = Object.freeze({
    node_env: process.env.NODE_ENV ,
    port: process.env.PORT,
    secret: process.env.SECRET
});
console.log('config is', configuration);
export default configuration;
