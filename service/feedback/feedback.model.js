const mongoose = require('mongoose')

const FeedbackSchema  = new mongoose.Schema({
    name: {type : String},
    designation: {type : String},
    companyName: {type : String},
    email: {type : String},
    mobileNumber: {type : Number},
    comment: {type : String}
})

const Feedback = mongoose.model('Feedback', FeedbackSchema)

module.exports = Feedback;