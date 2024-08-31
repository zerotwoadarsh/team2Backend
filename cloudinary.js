const cloudinary= require("cloudinary").v2;
//cloud
exports.cloudinaryConnect= ()=>{
  try{
    cloudinary.config({
        cloud_name: "df24znth6",
        api_key: "585526246115956",
        api_secret: "ZQTrKBgRewV2yKqc7gEGys3RWFA"
    })
  }  catch(error) {
    console.log(error)
  }
}