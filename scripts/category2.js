/***SCHEMA***/
     //_id: ObjectId
     //slug: String
     //name: String
     //desc: String
     //parentId: ObjectId
     //ancestors: [Object]

     var men_main = {
        slug: 'category-men',
        name: 'Men',
        desc: 'Men\'s Sneakers',
        parentId: null,
        ancestors: null,
    };

    var women_main = {
        slug: 'category-women',
        name: 'Women',
        desc: 'Women\'s Sneakers',
        parentId: null,
        ancestors: null,
    };

    var kids_main = {
        slug: 'category-kids',
        name: 'Kids',
        desc: 'Kids\' Sneakers',
        parentId: null,
        ancestors: null,
    };

    var boys = {
        slug: 'category-boys',
        name: 'Boys',
        desc: 'Boys\' Sneakers',
        //parentId: [kidsId],
        parentId: null,
        ancestors: null,
    };

    var girls = {
        slug: 'category-girls',
        name: 'Girls',
        desc: 'Girls\' Sneakers',
        parentId: null,
        ancestors: null,
    };

var training = {
    slug: 'category-training-gym',
    name: 'Training/Gym',
    desc: 'Sneakers designed for maximum athletic performance.',
    parentId: null,
    ancestors: null,
};

var lifestyle = {
    slug: 'category-lifestyle',
    name: 'Lifestyle',
    desc: 'You want to look good. We want you to look good. Wear these sneakers and everyone gets what they want.',
    parentId: null,
    ancestors: null,
};

var running = {
    slug: 'category-running',
    name: 'Running',
    desc: 'Whether you\'re a casual jogger or a hard-core marathoner, these sneakers will fit the bill.',
    parentId: null,
    ancestors: null,
};

var basket = {
    slug: 'category-basketball',
    name: 'Basketball',
    desc: 'Sneakers to give you the edge on the court.',
    parentId: null,
    ancestors: null,
};

var skate = {
    slug: 'category-skateboard',
    name: 'Skateboard',
    desc: 'Board shoes maximized for performance on your deck of choice.',
    parentId: null,
    ancestors: null,
};

db.categories.insertMany(
    [
        skate,
        basket,
        running,
        training,
        men_main,
        women_main,
        kids_main,
        girls,
        boys,
    ]
);

// var menId = db.categories.findOne({slug: 'category-men'}, {_id: 1});
// var womenId = db.categories.findOne({slug: 'category-women'}, {_id: 1});
var kidsId = db.categories.findOne({slug: 'category-kids'}, {_id: 1});
var boysId = db.categories.findOne({slug: 'category-boys'}, {_id: 1});
var girlsId = db.categories.findOne({slug: 'category-girls'}, {_id: 1});

var bigKidsBoys = {
    slug: 'category-boys-big-kids',
    name: 'Big Kids',
    desc: 'Boys\' Sneakers (3.5Y - 7Y)',
    parentId: [boysId],
    ancestors: [kidsId],
};

var bigKidsGirls = {
    slug: 'category-girls-big-kids',
    name: 'Big Kids',
    desc: 'Girls\' Sneakers (3.5Y - 7Y)',
    parentId: [girlsId],
    ancestors: [kidsId],
};

var littleKidsBoys = {
    slug: 'category-boys-little-kids',
    name: 'Little Kids',
    desc: 'Boys\' Sneakers (10.5C - 3.5Y)',
    parentId: [boysId],
    ancestors: [kidsId],
};

var littleKidsGirls = {
    slug: 'category-girls-little-kids',
    name: 'Little Kids',
    desc: 'Girls\' Sneakers (10.5C - 3.5Y)',
    parentId: [girlsId],
    ancestors: [kidsId],
};

var babyToddlerBoys = {
    slug: 'category-boys-baby-toddler',
    name: 'Baby and Toddler',
    desc: 'Boys\' Sneakers (0C - 10C)',
    parentId: [boysId],
    ancestors: [kidsId],
};

var babyToddlerGirls = {
    slug: 'category-girls-baby-toddler',
    name: 'Baby and Toddler',
    desc: 'Girls\' Sneakers (0C - 10C)',
    parentId: [girlsId],
    ancestors: [kidsId],
};

db.categories.insertMany(
    [
        babyToddlerBoys,
        babyToddlerGirls,
        littleKidsBoys,
        littleKidsGirls,
        bigKidsBoys,
        bigKidsGirls,
    ]
);
