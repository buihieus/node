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
    try{
        let result = await customer.insertMany(arr);
        return result;

    } catch(error){
        console.log(error);
        return null;
    }
}

const getAllCustomersService = async () => {
    try{
        let result = await customer.find({});
        return result;

    } catch(error){
        console.log(error);
        return null;
    }
}

const putUpdateCustomerService = async (id, name, email, address) => {
    try{
        let result = await customer.updateOne({_id: id}, {name, email, address});
        return result;

    } catch(error){
        console.log(error);
        return null;
    }
}
module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,
    putUpdateCustomerService
}
