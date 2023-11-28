const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    nama_perusahaan: {
        type: String,
        required: [true, 'Masukkan nama perusahaan!'],
        unique: true
    },
    lokasi: {
        type: String,
        required: [true, 'Masukkan lokasi!'],
    },
    job: {
        type: String,
        required: [true, 'Masukkan job perusahaan!'],
    },
    kontak: {
        type: String,
    },
    catatan: {
        type: String,
    },
    status: {
        type: String,
        required: [true, 'Masukkan status perushaan penuh atau tersisa!']
    },
})

module.exports = mongoose.model('Company', CompanySchema)