const cloudinary = require("cloudinary").v2;

exports.uploadFileToCloudinary = async (file, folder, quality) => {
  const options = { folder };

  if (quality) {
    options.quality = quality;
  }

  // Automatically detects the file type
  options.resource_type = "auto";

  try {
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath, options);
    return result;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};
