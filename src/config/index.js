const config = {
    port: process.env.PORT,
    mongoDBUrl: process.env.MONGO_DB_URL,
    mongoDBOptions: {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
}

module.exports = config;