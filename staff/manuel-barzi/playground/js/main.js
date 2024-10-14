console.clear()

var a
a = 1

var b = 2
var c = a + b

b = true
c = a + b
b = false
c = a + b
a = true
c = a + b
b = true
c = a + b
a = 'hola'
c = a + b
b = 10
c = a + b
c = b + a

//console.log(d)
var d = function () { return 'hola mundo' }
//function d() { return 'hola mundo'}

//console.log(d.fullname)
d.fullname = 'Peter Pan'
//console.log(d.fullname)
//console.dir(d)

b.fullname = 'Wendy Darling'
//console.dir(b)

var e = d
//console.dir(e)

//e.fullname = 'James Hook'
e['fullname'] = 'Pepito Grillo'
e.name = 'e'
//console.dir(d)
//console.log(d())
//console.log(e())

d = function (name) { return 'Hello, ' + name + '!' }
//console.dir(d)

//console.log(d('Peter'))
//console.log(d('Wendy'))
//console.log(d())

var a = []
a['0'] = 100
a[1] = 200
a[5] = 600
console.dir(a)

var b = { length: 0 }
b[0] = 100
b[1] = 200
b[5] = 600
b['length'] = 6
console.dir(b)

for (var i = 0; i < b.length; i++) {
    var elem = b[i]

    console.log(elem)
}