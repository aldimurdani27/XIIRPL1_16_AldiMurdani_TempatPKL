const Company = require('../models/Company')

module.exports = {
    index: async (req, res) => {
        try {
            const companies = await Company.find()
            if(companies.length > 0) {
                res.status(200).json({
                    status: true,
                    data: companies,
                    method: req.method,
                    url: req.url
                })
            }else {
                res.json({
                    status: false,
                    message: "Data masih kosong!"
                })
            }
        } catch (error) {
            res.status(400).json({sucess: false})
        } 
    },
    show: async (req, res) => {
        try {
            const company = await Company.findById(req.params.id)
            res.json({
                status: true,
                data: company,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    showcity: async (req, res) => {
        try {
            const lokasi = req.params.lokasi;
            const regexLokasi = new RegExp(lokasi, 'i');
            const companies = await Company.find({lokasi: regexLokasi})
            if(companies.length > 0) {
                res.status(200).json({
                    status: true,
                    data: companies,
                    method: req.method,
                    url: req.url
                })
            }else {
                res.json({
                    status: false,
                    message: "Data masih kosong!"
                })
            }
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    store: async (req, res) => {
        try {
            const company = await Company.create(req.body)
            res.status(200).json({
                status: true,
                data: company,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
        
    },
    update: async (req, res) => {
        try {
            const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: company,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    delete: async (req, res) => {
        try {
            await Company.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    }
}