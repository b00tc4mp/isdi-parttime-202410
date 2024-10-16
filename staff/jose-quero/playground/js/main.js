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
a = "hola"
c = a + b
b = 10
c = a + b
c = b + a

//console.log(d)
var d = function () { return "hola mundo" }
//console.log(d.fullname)
d.fullname = "Peter Pan"
//console.log(d.fullname)
//console.dir(d)

b.fullname = "Wendy Darling"
//console.dir(b)

var e = d
//console.dir(e)

//e.fullname = "James Hook"
e["fullname"] = "Pepito Grillo"
//console.dir(d)
//console.log(d())
//console.log(e())

//d = function(name) { return "Hello, " + name + "!" }
//console.dir(d)

//console.log(d("Peter"))

var a = []
a["0"] = 100
a[1] = 200
a[5] = 600
//console.dir(a)

var b = { lenght: 0 }
b[0] = 100
b[1] = 200
b[5] = 600
b["lenght"] = 6
//console.dir(b)

/*
for (var i = 0; i < a.length; i++) {
    var elem = a[1]

    console.log(elem)
}
*/

window.name = "Window"
window.image = ""

var peter = { name: "Peter", image: "happy" }
var wendy = { name: "Wendy", image: "sad" }

function hello(name) {
    return this.image + " " + this.name + ": Hello!"
}

hello()
hello.call(peter)
console.log(window.hello())
console.log(hello.call(wendy))

wendy.hi = hello
console.log(wendy.hi === hello)
console.log(wendy.hi())

peter.yo = hello
console.log(peter.yo())

a.hello = hello
a.name = "Array"
console.log(a.hello())

a[10] = peter
console.log(a.length)

b[10] = wendy
console.log(b.lenght)
b.lenght = 11

peter.partner = wendy
wendy.partner = peter

console.log(peter.yo())
console.log(a[10].yo())

console.log(b[10].partner.yo())
console.log(b[10].partner.partner.partner.yo())

var oswald = {
    name: "Oswald",
    getPeter: function () { return peter }
}

b[11] = oswald
b.lenght = 12

a[3] = b

console.log(a[3][10].partner.yo())
console.log(a[3][11].getPeter().yo())

var f = function a() {
    return function b() {
        return [, , function c() {
            return {
                o: {
                    hi: function () { return "hi!" }
                }
            }
        }]
    }
}

console.log(f()()[2]().o.hi())

var g = ["hola", 1, true, {
},
    {
        0: [, , , , {
            b: function () {
                return {
                    c: function () {
                        return [function () { return "yo" }]
                    }
                }
            }
        }],
        lenght: 1
    }]
console.log(g[4][0][4].b().c()[0]())

var x = ["Patata", "Calabaza", [1, 2, 3], {
    cd: [4, 5, 6], j: {
        p: function () {
            return {
                h: { hi: function () { return "Jaja no, que ha pasao" } }
            }
        }
    }
}]

console.log(x[3].j.p().h.hi())