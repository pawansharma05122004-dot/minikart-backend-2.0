
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
  cloud_name: "drvlwahhg",
  api_key: "716838172415287",
  api_secret: "TjD_SO60NxTd8-WgFFAJnuA8H_g"
});

const uploadOnCloudinary = async (localFilePath) => {
    console.log('cloudnairy',localFilePath)
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}