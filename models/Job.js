const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
    title: {
        type: Sequelize.TEXT,
    },
    salary: {
        type: Sequelize.TEXT,
    },
    company: {
        type: Sequelize.TEXT,
    },
    email: {
        type: Sequelize.TEXT,
    },
    new_job: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
});

module.exports = Job