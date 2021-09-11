import mongoose from 'mongoose';

class Database {
    constructor() {
        this.URI = process.env.MONGODB_URI;
    }

    async connect() {
        try {
            console.log('connection to db...')
            let connection = await mongoose.connect(`${this.URI}`);
            if (connection) {
                console.log(`Database connection successful, \nURI: ${this.URI}`);
            } else {
                throw Error(connection.Error);
            }
        } catch (e) {
            console.error(`Database connection error ${e}`);
        }
    }

    setURI(URI) {
        if (URI) this.URI = encodeURI(URI);
    }
}

export const db = new Database();
