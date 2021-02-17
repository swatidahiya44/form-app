const Feedback = require("./feedback.model")

exports.save = async function (object) {
    const feedback = new Feedback(object);
    return await feedback.save();
}