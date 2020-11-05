import  * as mongoose from 'mongoose';

class Database {
    public static open(mongoURL) {
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
    public static disconnect() {
        console.log('Disconnected');
        mongoose.connection.close();

    }
}
export default Database;