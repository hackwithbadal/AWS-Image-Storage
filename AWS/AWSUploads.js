const AWS = require('aws-sdk')
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_BUCKET_REGION || 'us-east-1'
});

const S3_bucket = new AWS.S3();


const Upload = () => multer({
    storage: multerS3({
        s3: S3_bucket,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: process.env.AWS_ACL_ACCESS,
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + ".jpeg");
        },
    }),
});

module.exports = Upload;
