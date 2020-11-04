import  * as mongoose from 'mongoose';

class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
        console.log('inside open method');
        mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if ( err ) {
                console.log(err);
                reject(err);
                return;
            }
            // tslint:disable-next-line: no-null-keyword
            resolve(null);
        });

    });
}
    static disconnect() {
        console.log('Disconnected');
        mongoose.connection.close();

    }
}
export default Database;