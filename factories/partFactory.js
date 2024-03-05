const { MobilePart, OS, Camera, Port, Screen, Body } = require("../mobile_parts/mobilePart");

class PartFactory{
    constructor(priceList){
        this.priceList = priceList;
    }
    createPart(type){
        const cInfo = this.priceList[type];
        switch(type){
            case 'A':
            case 'B':
            case 'C':
                return new Screen(cInfo.name, cInfo.price);
            case 'D':
            case 'E':
                return new Camera(cInfo.name, cInfo.price);
            case 'F':
            case 'G':
            case 'H':
                return new Port(cInfo.name, cInfo.price);
            case 'I':
            case 'J':
                return new OS(cInfo.name, cInfo.price);
            case 'K':
            case 'L':
                return new Body(cInfo.name, cInfo.price);
            default:
                return null;                                                
        }
        return null;
    }
}

module.exports = {PartFactory}