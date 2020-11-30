import Server from './server';
import configuration from './config/configuration';

const server = new Server (configuration) ;
server.bootstrap();
server.run();
