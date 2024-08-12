const { Sequelize } = require('sequelize');

const db_host = process.env.DATABASE_HOST
const db_name = process.env.DATABASE_NAME
const db_username = process.env.DATABASE_USER
const db_pass = process.env.DATABASE_PASS

const sequelize = new Sequelize(db_name, db_username, db_pass, {
    host: db_host,
    dialect: 'mysql',
}
);

async function syncDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({ force: false });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

if (process.env.NODE_ENV !== 'test') {
    syncDatabase().catch(err => { console.log(err) })
}

module.exports = { Sequelize, sequelize, syncDatabase };