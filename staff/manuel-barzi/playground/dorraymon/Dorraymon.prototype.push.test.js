function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        this[this.length] = argument
        this.length++ // this.length = this.length + 1 // this.length += 1
    }

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
// Dorraymon { 0: 'html', 1: 'head', 2: 'body', 3: 'h1', 4: 'p', 5: 'table', 6: 'img', 7: 'video', length: 8 }

console.log('CASE add various dorraymons into nums')

var nums = new Dorraymon
var nums2 = new Dorraymon
nums2[0] = 1
nums2[1] = 2
nums2[2] = 3
nums2.length = 3
var nums3 = new Dorraymon
nums3[0] = 4
nums3[1] = 5
nums3.length = 2
var nums4 = new Dorraymon
nums4[0] = 6
nums4.length = 1
var nums5 = new Dorraymon
var nums6 = new Dorraymon
nums6[0] = 7
nums6.length = 1
var nums7 = new Dorraymon
nums7[0] = 8
nums7[1] = 9
nums7[2] = 10
nums7[3] = 11
nums7.length = 4
var length = nums.push(nums2, nums3, nums4, nums5, nums6, nums7)
console.log(length)
// 6
console.log(nums)
/*
Dorraymon { 
    0: Dorraymon { 
        0: 1, 
        1: 2, 
        2: 3,
        length: 3
    }, 
    1: Dorraymon {
        0: 4, 
        1: 5,
        length: 2
    },
    2: Dorraymon {
        0: 6,
        length: 1
    }, 
    3: Dorraymon {
        length: 0
    }, 
    4: Dorraymon {
        0: 7,
        length: 1
    },
    5: Dorraymon {
        0: 8, 
        1: 9, 
        2: 10, 
        3: 11,
        length: 4
    },
    length: 6
}
*/
console.log(nums[0][2])
// 3
var length = nums[0].push(12, 13)
console.log(length)
// 5
console.log(nums[0])
// Dorraymon { 0: 1, 1: 2, 2: 3, 3: 12, 4: 13, length: 5 }
console.log(nums.length)
// 6
console.log(nums)
/*
Dorraymon { 
    0: Dorraymon { 
        0: 1, 
        1: 2, 
        2: 3,
        3: 12,
        4: 13,
        length: 5
    }, 
    1: Dorraymon {
        0: 4, 
        1: 5,
        length: 2
    },
    2: Dorraymon {
        0: 6,
        length: 1
    }, 
    3: Dorraymon {
        length: 0
    }, 
    4: Dorraymon {
        0: 7,
        length: 1
    },
    5: Dorraymon {
        0: 8, 
        1: 9, 
        2: 10, 
        3: 11,
        length: 4
    },
    length: 6
}
*/
var nums8 = new Dorraymon
nums8[0] = 14
nums8[1] = 15
nums8[2] = 16
nums8.length = 3
var length = nums[1].push(nums8)
console.log(length)
// 3
console.log(nums[1])
/*
Dorraymon {
    0: 4, 
    1: 5,
    2: Dorraymon {
        0: 14,
        1: 15,
        2: 16,
        length: 3
    },
    length: 3
}
*/
console.log(nums.length)
// 6
console.log(nums)
/*
Dorraymon { 
    0: Dorraymon { 
        0: 1, 
        1: 2, 
        2: 3,
        3: 12,
        4: 13,
        length: 5
    }, 
    1: Dorraymon {
        0: 4, 
        1: 5,
        2: Dorraymon {
            0: 14,
            1: 15,
            2: 16,
            length: 3
        },
        length: 3
    },
    2: Dorraymon {
        0: 6,
        length: 1
    }, 
    3: Dorraymon {
        length: 0
    }, 
    4: Dorraymon {
        0: 7,
        length: 1
    },
    5: Dorraymon {
        0: 8, 
        1: 9, 
        2: 10, 
        3: 11,
        length: 4
    },
    length: 6
}
*/
console.log(nums[1][2][1])
// 15