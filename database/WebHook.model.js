const mongoose = require('mongoose');

const WebHook = mongoose.Schema({
    name: String,
    payload: Object,
    addedBy: String
}, {
    timestamps: true
});

module.exports = mongoose.model('WebHook', WebHook);