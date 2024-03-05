const priceList = require("../data");
const { PartFactory } = require("../factories/partFactory");
const { logger } = require("../logger");
const httpStatus = require('http-status')

function createOrder(req, res){
    logger.info('Enter: orderController: createOrder');
    try{
        const parts = req.body.components;    
        const includedCategories = {};
        const partFactory = new PartFactory(priceList);
        let totalPrice = 0;
        let partNames = [];
        parts.forEach(p => {
            const part = partFactory.createPart(p);
    
            if(!part || part == null){
                throw{ status: httpStatus.BAD_REQUEST, error: "Invalid components!" }
            }
    
            if(!includedCategories[part.getCategory()]){
                includedCategories[part.getCategory()] = true;
                totalPrice += part.getPrice();
                partNames.push(part.getName());
            }else{
                throw {status: httpStatus.BAD_REQUEST, error: "One component from each category is allowed!"}
            }
        })
        const orderId = generateOrderId();
        const order = {
            order_id: orderId,
            total: totalPrice.toFixed(2),
            parts: partNames
        };
        logger.info("orderController: createOrder: " + JSON.stringify(order))
        return res.status(httpStatus.CREATED).json(order);

    }catch(error){
        switch(error.status){
            case httpStatus.BAD_REQUEST: 
                logger.error("orderController: createOrder: " + "status: " + error.status + " message: " + error.error);
                return res.status(error.status).json({"error": error.error});
            default:
                logger.error("orderController: createOrder: " + "status: " + error.status + " message: " + error.message);
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({"error": "Internal Server Error"})
        }
    }finally{
        logger.info('Exit: orderController: createOrder');
    }    
}
function generateOrderId() {
    return Math.random().toString(36).substr(2, 10);
}
module.exports = {createOrder}