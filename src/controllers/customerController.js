const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService, createArrayCustomerService, getAllCustomersService, putUpdateCustomerService, deleteACustomerService, deleteArrayCustomerService } = require("../services/customerService")
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
    },
    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);
        if (customers) {
            return res.status(200).json(
                {
                    EC: 0,
                    data: customers
                }
            )
        } else {
            return res.status(200).json(
                {
                    EC: -1,
                    data: customers
                }
            )
        }
    },
    getAllCustomers: async (req, res) => {
        // console.log(req.query);
        let limit = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let result = null;
        if (limit&&page) {
            result = await getAllCustomersService(limit, page,name);
        }else{
            result = await getAllCustomersService();
        }
        
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    putUpdateCustomers: async (req, res) => {
        let { id, name, email, address } = req.body;
        let result = await putUpdateCustomerService(id, name, email, address);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    deleteACustomer: async (req, res) => {
        let id = req.body.id;
        let result = await deleteACustomerService(id);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    deleteArrayCustomer: async (req, res) => {
        let ids = req.body.customersId;
        console.log("ids = ", ids);
        let result = await deleteArrayCustomerService(ids);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    }
}