
const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let uploadPath = __dirname +'/abc/' + fileObject.name;
    try {
        await fileObject.mv(uploadPath);
        return {
            status: "success",
            path: 'link-image',
            error: null
        }
    } catch (err) {
        console.log(" check error", err);
        return {
            status: "failed",
            path: null,
            error: JSON.stringify(err)
        }
    }
    // Use the mv() method to place the file somewhere on your server
    fileObject.mv(uploadPath, function (err) {
        if (err) {
            console.log("error", err);
        }

    });
}

const uploadMultipleFiles = async (req, res) => {

}

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}