var a = function b() {
    return [{
    }, [0, undefined, function c() {
        return {
            d: "not this",
            e: ["not this", function f() {
                return "THIS!!!"
            }]
        }
    }
    ]]
}

console.log(a()[1][2]().e[1]())