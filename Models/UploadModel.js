const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    ImageURL:{
        type:String,
    },
    fileName:{
        type:String
    }
});

const fileUpload = mongoose.model('fileUploads', clientSchema);

module.exports = fileUpload;
