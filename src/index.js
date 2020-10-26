import Server from './Server';
import config from './config/configuration';
console.log('config is', config);
const server = new Server({PORT : 7000});

server.bootstrap().run();