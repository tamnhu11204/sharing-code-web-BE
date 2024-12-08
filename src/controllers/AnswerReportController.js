const AnswerReportService = require("../services/AnswerReportService.js");

const createAnswerReport = async (req, res) => {
    try {
        const { answer } = req.body;
        const userId = req.user.id;

        const newReport = await AnswerReportService.createAnswerReport({ answer, userId });

        res.status(201).json({
            status: "OK",
            message: "Report created successfully.",
            data: newReport,
        });
    } catch (err) {
        res.status(500).json({
            status: "ERR",
            message: err.message,
        });
    }
};

const getDetailsAnswerReport = async (req, res) => {
    try {
        const report = await AnswerReportService.getDetailsAnswerReport(req.params.id);
        res.status(200).json({
            status: "OK",
            message: "Fetched report details successfully.",
            data: report,
        });
    } catch (err) {
        res.status(404).json({
            status: "ERR",
            message: err.message,
        });
    }
};

const getAllAnswerReports = async (req, res) => {
    try {
        const reports = await AnswerReportService.getAllAnswerReports();
        res.status(200).json({
            status: "OK",
            message: "Fetched all reports successfully.",
            data: reports,
        });
    } catch (err) {
        res.status(500).json({
            status: "ERR",
            message: err.message,
        });
    }
};

const deleteAnswerReport = async (req, res) => {
    try {
        await AnswerReportService.deleteAnswerReport(req.params.id);
        res.status(200).json({
            status: "OK",
            message: "Report deleted successfully.",
        });
    } catch (err) {
        res.status(404).json({
            status: "ERR",
            message: err.message,
        });
    }
};

const getReportsByAnswer = async (req, res) => {
    try {
        const reports = await AnswerReportService.getReportsByAnswer(req.params.answerId);
        res.status(200).json({
            status: "OK",
            message: "Fetched reports for the answer successfully.",
            data: reports,
        });
    } catch (err) {
        res.status(500).json({
            status: "ERR",
            message: err.message,
        });
    }
};

module.exports = {
    createAnswerReport,
    getDetailsAnswerReport,
    getAllAnswerReports,
    deleteAnswerReport,
    getReportsByAnswer,
};