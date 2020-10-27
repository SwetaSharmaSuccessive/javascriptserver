import * as express from 'express';
class Server {
    private app: express.Express;
    constructor(private config: any) {
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
        this.app.listen(this.config.PORT, () => console.log(`Server is up and running on port ${this.config.PORT}`));
        return this;
    }
}
export default Server;