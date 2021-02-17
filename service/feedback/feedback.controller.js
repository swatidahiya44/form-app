var FeedbackService = require('/data/form-app/service/feedback/feedback.service.js')    
const router = express.Router();
const express = require('express');
router.post('/post', postFeedback);

exports.postFeedback = async function (req, res) {
    try {
        var feedback = await FeedbackService.postFeedback(req.body)
        return res.status(200).json({ status: 200, data: feedback, message: "Succesfully fedback Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}