import  * as mongoose from 'mongoose';

class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };
        mongoose.connect(mongoURL, options, (err) => {
            if ( err ) {
                return reject(err);
            }
            resolve();
        });

    });
}
    static disconnect() {
        console.log('Disconnected');
        mongoose.connection.close();

    }
}
export default Database;