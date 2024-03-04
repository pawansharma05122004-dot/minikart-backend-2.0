import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
  cloud_name: "drvlwahhg",
  api_key: 716838172415287,
  api_secret: process.env.CLOUDNAIRY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {

    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export {uploadOnCloudinary}