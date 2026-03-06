class Square{
    constructor(side){
        this.side = side;
    }
    getPerimeter(){
        return 4 * this.side
    }
    getArea(){
        return this.side * this.side
    }
}
module.exports = Square;