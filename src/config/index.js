const config = {
  port: process.env.PORT || 4000,
  mongoDBUrl:
    process.env.MONGO_DB_URL ||
    "mongodb+srv://anilrai:yfPjh4m4ph9GbIpX@cluster0.5pc2z.mongodb.net/commerce?retryWrites=true&w=majority",
  mongoDBOptions: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  jwt: {
    accessExpirationMinutes: 60,
    secret: "2r5u8x/A%D*G-KaPdSgVkYp3s6v9y$B&",
  },
};

module.exports = config;
