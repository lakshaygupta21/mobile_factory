const { categories } = require("../constants");

class MobilePart {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }

    getName(){
        return this.name;
    }
}

class Screen extends MobilePart {
    getCategory(){
        return categories.screen;
    }
}
class Camera extends MobilePart {
    getCategory(){
        return categories.camera;
    }
}
class Port extends MobilePart {
    getCategory(){
        return categories.port;
    }
}
class OS extends MobilePart {
    getCategory(){
        return categories.os;
    }
}
class Body extends MobilePart {
    getCategory(){
        return categories.body;
    }
}

module.exports = { MobilePart, Screen, Camera, Port, OS, Body };