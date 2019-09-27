const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    date: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);