function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.push = function (element) {
    this[this.length] = element
    this.length++ // this.length = this.length + 1 // this.length += 1

    return this.length
}

console.log('TEST Dorraymon.prototype.push')

console.log('CASE add character to spong bob characters')

var chars = new Dorraymon
chars[0] = 'Sponge Bob'
chars[1] = 'Patrick Star'
chars[2] = 'Squidward Tentacles'
chars[3] = 'Gary Snail'
chars.length = 4
var length = chars.push('Sheldon Plankton')
console.log(length)
// 5
console.log(chars)
// Dorraymon { 0: 'Sponge Bob', 1: 'Patrick Star', 2: 'Squidward Tentacles', 3: 'Gary Snail', 4: 'Sheldon Plankton', length: 5 }

console.log('CASE add various html tags')

var tags = new Dorraymon
tags[0] = 'html'
tags[1] = 'head'
tags[2] = 'body'
tags.length = 3
var length = tags.push('h1', 'p', 'table', 'img', 'video')
console.log(length)
// 8
console.log(tags)
// ['html', 'head', 'body', 'h1', 'p', 'table', 'img', 'video']