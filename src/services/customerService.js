const customer = require("../models/customer");


const createCustomerService = async (customerData) => {
    console.log("check customer data", customerData)
    try {
        let result = await customer.create({
            name: customerData.name, // tương đương name :name
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;
    } catch (error) {
        console.log(">> check error", error);

        return null;

    }
}

const createArrayCustomerService = async (arr) => {
    try {
        let result = await customer.insertMany(arr);
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const getAllCustomersService = async (limit, page, name) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            if (name) {
                result = await customer.find(
                    {
                        "name": { $regex: '.*' + name + '.*' }
                    }
                ).skip(offset).limit(limit).exec();
            }else
            result = await customer.find({}).limit(limit).skip(offset).exec();
        } else {
            result = await customer.find({});
        }

        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const putUpdateCustomerService = async (id, name, email, address) => {
    try {
        let result = await customer.updateOne({ _id: id }, { name, email, address });
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteACustomerService = async (id, name, email, address) => {
    try {
        let result = await customer.findById(id);
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}
const deleteArrayCustomerService = async (arrIds) => {
    try {
        let result = await customer.delete({ _id: { $in: arrIds } });
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}
module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,
    putUpdateCustomerService,
    deleteACustomerService,
    deleteArrayCustomerService
}
