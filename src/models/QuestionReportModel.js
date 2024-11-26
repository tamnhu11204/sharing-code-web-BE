//lưu lượt report của ques
const mongoose = require('mongoose')

const questionReportSchema = new mongoose.Schema(
    {
        //khoa ngoai
        user: {
            type: mongoose.Schema.Types.Objectid, 
            ref: 'User',
            require: true
        },
        question: {
            type: mongoose.Schema.Types.Objectid, 
            ref: 'Question',
            require: true
        },
    },
    {
        timestamps: true,
    }
);

const QuestionReport = mongoose.model('QuestionReport', questionReportSchema);
module.exports = QuestionReport;