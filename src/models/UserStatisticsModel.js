//lưu thống kê hoạt động của tất cả các user
const mongoose = require('mongoose')

const userStatisticsSchema = new mongoose.Schema(
    {
        month: {type: Number, required: true}, 
        year: {type: Number, required: true},
        registrationCount: {type: Number, required: true},
        bannedCount: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const UserStatistics = mongoose.model('UserStatistics', userStatisticsSchema);
module.exports = UserStatistics;