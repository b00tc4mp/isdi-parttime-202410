var g = ['jo', 99, true, {
    0: [, , , , {
        b: function () {
            return {
                c: function () {
                    return [function () {
                        return {
                            d: function () {
                                return 'Tachan!';
                            },
                        };
                    },
                    ];
                },
            };
        },
    },
    ],
},
];

console.log(g[3][0][4].b().c()[0]().d());
