let sequelize = require('sequelize'); // import sequelize

require('dotenv').config(); // to read env file

//let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;