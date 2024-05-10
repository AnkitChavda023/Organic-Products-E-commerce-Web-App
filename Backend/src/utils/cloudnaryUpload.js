import {v2 as FileUpload} from 'cloudinary';
import fs from 'fs';

FileUpload.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env,CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudanary = async (localFilePath) =>{
    try {

        if(!localFilePath) return null;
        // upload the file on cloudinary
        const responce = await FileUpload.uploader.upload(localFilePath,{
            resource_type: 'auto'
        })
        // file has been uploaded successfully
        console.log("Upload on cloudinary successfully", responce.url);

        return responce;

    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as  the upload operation failed
    }
}

export {uploadOnCloudanary};

