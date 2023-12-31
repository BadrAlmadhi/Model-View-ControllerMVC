const sequelize = require('../config/connection');
const { User, Comment, Blog } = require('../models');


const userData = require('./user.json');
const commentData = require('./comments.json');
const blogData = require('./blog.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const blog of blogData) {
        await Blog.create({
            ...blog,
            user_id: users[Math.floor(Math.random() * users.length)].dataValues.id,
        });
    }

    const comment = await Comment.bulkCreate(commentData, {
        returning: true,
    })
    process.exit(0);
}

seedDatabase();