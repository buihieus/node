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
        console.log(error);

        return null;

    }
}

module.exports = {
    createCustomerService
}
