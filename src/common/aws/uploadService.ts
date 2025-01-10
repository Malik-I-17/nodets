import AWS from 'aws-sdk';
import axios from 'axios';
export const uploadS3 = async (uploadFiles: any, moduleName: string, res: any) => {
    try {
        AWS.config.update({
            accessKeyId: process.env.ACCESS_KEY_ID, // Access key ID
            secretAccessKey: process.env.SECRET_ACCESS_KEY, // Secret access key
            region: process.env.REGION || 'ap-south-1', //Region
        });

        // const s3 = new AWS.S3();
        const s3 = new AWS.S3({
            endpoint: new AWS.Endpoint('https://s3.ap-south-1.amazonaws.com'), // Correct region endpoint
        });
        const fileExtension = uploadFiles.originalname.split('.').pop();
        const fileName = `${Date.now().toString().replace(/:/g, '-')}.${fileExtension}`;
        const fileKey = `${moduleName}/${fileName}`;

        // Setting up S3 upload parameters
        const params = {
            Bucket: process.env.BUCKET_NAME,
            Key: fileKey, // File name you want to save as in S3
            Body: uploadFiles.buffer,
            ContentType: uploadFiles.mimetype,
        };
        // Uploading file to the bucket
        //@ts-ignore
        const data: any = await s3.upload(params).promise();
        //return data.Location;

        const s3Params = {
            Bucket: process.env.BUCKET_NAME,
            Key: data.key,
            Expires: 432000,
        };

        return await s3.getSignedUrl('getObject', s3Params);
    } catch (err: any) {
        console.log(err);
        res.status(500).send({
            errors: [],
            message: err.originalError?.message,
        });
    }
};
