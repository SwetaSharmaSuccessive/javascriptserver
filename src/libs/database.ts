import  * as mongoose from 'mongoose';

class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
        mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if ( err ) {
                console.log(err);
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