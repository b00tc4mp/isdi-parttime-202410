function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.at = function (index) {
    if (index < 0) {
        var newIndex = this.length + index
        return this[newIndex]
    } else {
        return this[index]
    }
}

console.log('TEST Dorraymon.prototype.at')

console.log(`CASE get videogame at index 4`)

//var cars = ['Age of Empires', 'Warcraft 3', 'Company of Heroes', 'V Rising', 'Warhammer 4,000: Darktide']
var videogames = new Dorraymon
videogames[0] = 'Age of Empires'
videogames[1] = 'Warcraft 3'
videogames[2] = 'Company of Heroes 3'
videogames[4] = 'V Rising'
videogames[5] = 'Warhammer 40,000: Darktide'
videogames.length = 6
var videogame = videogames.at(4)
console.log(videogame)
//V Rising


console.log('CASE get book at index -2, -3, -1')

var shelf = new Dorraymon
shelf[0] = { name: 'La Rueda del Tiempo', author: 'Robert Jordan', genre: 'Fantasía' }
shelf[1] = { name: 'El Archivo de las Tormentas', author: 'Brandon Sanderson', genre: 'Fantasía' }
shelf[2] = { name: 'Proyecto Hail Mary', author: 'Andy Weir', genre: 'Ciencia Ficción' }
shelf.length = 3
var book = shelf.at(-2)
console.log(book)
// { name: 'El Archivo de las Tormentas', author: 'Brandon Sanderson', genre: 'Fantasía' }
var book = shelf.at(-3)
console.log(book)
// { name: 'La Rueda del Tiempo', author: 'Robert Jordan', genre: 'Fantasía' }
var book = shelf.at(-1)
console.log(book)
// { name: 'Proyecto Hail Mary', author: 'Andy Weir', genre: 'Ciencia Ficción' }


console.log('CASE get book at index 10')

var shelf = new Dorraymon
shelf[0] = { name: 'La Rueda del Tiempo', author: 'Robert Jordan', genre: 'Fantasía' }
shelf[1] = { name: 'El Archivo de las Tormentas', author: 'Brandon Sanderson', genre: 'Fantasía' }
shelf[2] = { name: 'Proyecto Hail Mary', author: 'Andy Weir', genre: 'Ciencia Ficción' }
shelf.length = 3
var book = shelf.at(10)
console.log(book)
// undefined


console.log('CASE get book at index -10')

var shelf = new Dorraymon
shelf[0] = { name: 'La Rueda del Tiempo', author: 'Robert Jordan', genre: 'Fantasía' }
shelf[1] = { name: 'El Archivo de las Tormentas', author: 'Brandon Sanderson', genre: 'Fantasía' }
shelf[2] = { name: 'Proyecto Hail Mary', author: 'Andy Weir', genre: 'Ciencia Ficción' }
shelf.length = 3
var book = shelf.at(-10)
console.log(book)
// undefined


console.log('CASE get function at index 2')

var funs = new Dorraymon
funs[0] = function () { return 'A' }
funs[1] = function () { return 'B' }
funs[2] = function () { return 'C' }
funs[3] = function () { return 'D' }
funs.length = 4
var fun = funs.at(2)
console.log(fun())
// C