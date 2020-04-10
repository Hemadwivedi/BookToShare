module.exports = {
    "development": {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": process.env.JAWSDB_URL,
        "dialect": "mysql"
    }
};
