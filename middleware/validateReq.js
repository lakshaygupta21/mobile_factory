const { hasDuplicates } = require("../utils/utils");

function validateReq(req, res, next){
    const components = req.body.components;
    if(!components || components == null){
        return res.status(400).json({"error": "Invalid input!"});
    }
    if(hasDuplicates(components)){
        return res.status(400).json({"error": "Duplicate components found!"})
    }
    if(components.length != 5){
        return res.status(400).json({"error": "Please input all the required components!"});
    }
    next();
}

module.exports = {validateReq}