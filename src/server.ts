import * as express from 'express';
import { IConfig } from './config/IConfig';
class Server {
    private app: any;
    constructor(private config: IConfig) {
        this.app = express();
    }
    bootstrap() {
        this.SetupRoutes();
        return this;
    }
    SetupRoutes() {
        this.app.get('/health-check', (req, res, next) => {
            res.send('I am Ok');
        });
        return this;
    }

    run() {
        const { PORT } = this.config;
        this.app.listen(PORT, (err) => {
            if (err) {
                console.log('error:', err);
            }
            console.log(`Server is up and running on port ${PORT}`);
        });
        return this;
    }
}
export default Server;