const mongoose = require('mongoose')
const Mixed = mongoose.Schema.Types.Mixed

const topicSchema = new mongoose.Schema({
    data: {
        type: Mixed,
    }
}, {timestamps: true})


module.exports = mongoose.model('Testing', topicSchema)
