const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


Blog.belongTo(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

Comment.belongTo(User, {
    foreignKey: 'user_id'
})

model.exports = { User, Blog, Comment };