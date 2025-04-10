const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService } = require("../services/customerService")
module.exports = {
    postCreateCustomer: async (req, res) => {

        let { name, address, phone, email, image, description } = req.body;

        let imageUrl = "";

        // image: String,
        if (!req.files || Object.keys(req.files).length === 0) {
            // do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
            console.log(">> check result: ", result.path);
        }
        let customerData = {
            name, // tương đương name :name
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);
        return res.status(200).json(
            {
                EC: 0,
                data: customer
            }
        )
    }
}