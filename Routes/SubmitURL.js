const express = require('express');
const router = express.Router();
const UploadModel = require('../Models/UploadModel');
const Upload = require('../AWS/AWSUploads');
require('dotenv/config');

router.get('/', async (req, res) => {
    const UploadedDocuments = await UploadModel.find({});
    res.render('index', { UploadedDocuments });
})

router.post('/upload', (req, res) => {
    const fileUpload = Upload().single('uploadImg');
    fileUpload(req, res, (err) => {
        if (err) return res.status(500).json({ message: "Internal server error" });
        const SavedUpload = new UploadModel({
            ImageURL: req.file.location,
            fileName: req.file.originalname
        });
        SavedUpload.save()
            .then((upload) => {
                res.render('ThankYou', {
                    data: upload
                })
            })
            .catch((error) => {
                res.render('Error', { error })
            })
    })
})


module.exports = router;