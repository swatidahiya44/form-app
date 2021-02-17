var Feedback = require('/data/form-app/service/feedback/feedback.model.js')
var mongoose = require('mongoose');
const db = mongoose.connection;
exports.postFeedback = async function (req) {

    try {
        var feedback = await db.collection('feedback').insertOne(req.body);
        return feedback;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating feedback')
    }
}