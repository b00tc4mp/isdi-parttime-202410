function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.at = function (index) {
    return this[index]
}

console.log("TEST Dorraymon.prototype.at")

console.log("CASE get car at index 3")

var cars = new Dorraymon
cars[0] = "lambo"
cars[1] = "f350"
cars[2] = "911"
cars[3] = "m5"
cars[4] = "hummer"
cars.length = 5
var car = cars.at(3)
console.log(car)
//m5

console.log("CASE get function at index 2")

var funs = new Dorraymon
funs[0] = function () { return "Zero" }
funs[1] = function () { return "One" }
funs[2] = function () { return "Two" }
funs[3] = function () { return "Three" }
funs.length = 4
var fun = funs.at(2)
console.log(fun())
//Two

