import * as express from 'express';
import { IConfig } from './config/IConfig';
import * as bodyparser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import routes from './router';
import Database from './libs/database';
class Server {
    private app: any;
    constructor(private config: IConfig) {
        this.app = express();
    }
    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this.app;
    }
    public initBodyParser() {
        const { app } = this;
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: false }));
    }
    public setupRoutes() {
        const { app } = this;
        app.use('/health-check', (req, res, next) => {
            res.send('I am Ok');
        });
        app.use('/api', routes);
        app.use(notFoundHandler);
        app.use(errorHandler);
    }
   

    public run() {
        const { port, mongo_url } = this.config;
        Database.open(mongo_url)
            .then((res) => {
                console.log('successfully connected to mongo');
                this.app.listen(port, (err) => {
                    if (err) {
                        console.log('error:', err);
                    }
                    else {
                    console.log(`Server is up and running on port ${port}`);
                    }
                });
            })
            .catch(err => console.log(err));
        return this;
    }
}
export default Server;
