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
    bootstrap() {
        this.initBodyParser();
        this.SetupRoutes();
        return this.app;
    }
    SetupRoutes() {
        const { app } = this;
        app.use('/health-check', (req, res, next) => {
            res.send('I am Ok');
        });
        app.use('/api', routes);

        app.use(notFoundHandler);

        app.use(errorHandler);
    }
    public initBodyParser() {
        const { app } = this;
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: false }));
    }

    run() {
        const { PORT } = this.config;
        Database.open('mongodb://localhost:27017/express-training')
           .then((res) => {
                console.log('successfully connected to mongo');
                this.app.listen(PORT, (err) => {
                if (err) {
                    console.log('error:', err);
                }
                console.log(`Server is up and running on port ${PORT}`);
                });

            });
        return this;
    }
}
export default Server;
