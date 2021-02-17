const FeedbackService = require('./feedback.service')    

exports.post = async function (req, res) {
    const feedback = await FeedbackService.save(req.body)
    res.status(200).json({ status: 200, data: feedback, message: "Succesfully fedback Retrieved" });        
}

// exports.get = async function (req, res){
//     sres.json(req.body);
// }
