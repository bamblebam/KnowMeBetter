const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }


})
const ResumeDetail = mongoose.models.ResumeDetails || mongoose.model('ResumeDetails', ResumeSchema);
export default ResumeDetail;
