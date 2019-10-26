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

var menId = db.products.find({slug: 'category-men'}, {_id: 1});
var womenId = db.products.find({slug: 'category-women'}, {_id: 1});
var kidsId = db.products.find({slug: 'category-kids'}, {_id: 1});

var boys = {
    slug: 'category-boys',
    name: 'Boys',
    desc: 'Boys\' Sneakers',
    parentId: [kidsId],
    ancestors: null,
};

var girls = {
    slug: 'category-girls',
    name: 'Girls',
    desc: 'Girls\' Sneakers',
    parentId: [kidsId],
    ancestors: null,
};

var boysId = db.products.find({slug: 'category-boys'}, {_id: 1});
var girlsId = db.products.find({slug: 'category-girls'}, {_id: 1});

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

var lifeBoys = {
    slug: 'category-boys-lifestyle',
    name: 'Lifestyle',
    desc: '',
    parentId: [boysId],
    ancestors: [kidsId],
};

var lifeGirls = {
    slug: 'category-girls-lifestyle',
    name: 'Lifestyle',
    desc: '',
    parentId: [girlsId],
    ancestors: [kidsId],
};

var basketBoys = {
    slug: 'category-boys-basketball',
    name: 'Basketball',
    desc: '',
    parentId: [boysId],
    ancestors: [kidsId],
};

var basketGirls = {
    slug: 'category-girls-basketball',
    name: 'Basketball',
    desc: '',
    parentId: [girlsId],
    ancestors: [kidsId],
};

var runningBoys = {
    slug: 'category-boys-running',
    name: 'Running',
    desc: '',
    parentId: [boysId],
    ancestors: [kidsId],
};

var runningGirls = {
    slug: 'category-girls-running',
    name: 'Running',
    desc: '',
    parentId: [girlsId],
    ancestors: [kidsId],
};

var trainingMens =
    {
        slug: 'category-mens-training-gym',
        name: 'Athletic',
        desc: 'Sneakers designed for maximum athletic performance.',
        parentId: [menId],
        ancestors: [],
    };

var trainingWomens = {
    slug: 'category-womens-training-gym',
    name: 'Athletic',
    desc: 'Sneakers designed for maximum athletic performance.',
    parentId: [womenId],
    ancestors: [],
};

var lifeMens =
    {
        slug: 'category-mens-lifestyle',
        name: 'Lifestyle',
        desc: 'You want to look good. We want you to look good. Wear these sneakers and everyone gets what they want.',
        parentId: [menId],
        ancestors: [],
    };

var lifeWomens = {
    slug: 'category-womens-lifestyle',
    name: 'Lifestyle',
    desc: 'You want to look good. We want you to look good. Wear these sneakers and everyone gets what they want.',
    parentId: [womenId],
    ancestors: [],
};

var runMens =
    {
        slug: 'category-mens-running',
        name: 'Running',
        desc: 'Whether you\'re a casual jogger or a hard-core marathoner, these sneakers will fit the bill.',
        parentId: [menId],
        ancestors: [],
    };

var basket =
    {
        slug: 'category-basketball',
        name: 'Basketball',
        desc: 'Sneakers to give you the edge on the court.',
        parentId: [menId, womenId, kidsId],
        ancestors: [],
    };

var skate =
    {
        slug: 'category-skateboard',
        name: 'Skateboard',
        desc: 'Board shoes maximized for performance on your deck of choice.',
        parentId: [menId, womenId, kidsId],
        ancestors: [],
    };

var athId = db.products.find({slug: 'category-athletic'}, {_id: 1});
var lifeId = db.products.find({slug: 'category-lifestyle'}, {_id: 1});
var runId = db.products.find({slug: 'category-running'}, {_id: 1});
var basketId = db.products.find({slug: 'category-basketball'}, {_id: 1});
var skateId = db.products.find({slug: 'category-skateboard'}, {_id: 1});
// //const collectionName = 'categories';



// db.categories.insertMany(
//     [
//         ath, life, run, basket, skate
//     ]
// );

// var e = db.categories.find({name: 'Athletic'});
// var eArr = e.toArray();
// var doc = eArr[0];

// db.categories.updateMany(
//     {name :
//         {
//             $in: ['Running', 'Basketball', 'Skateboard']
//         }
//     },
//     {
//         $push: { 'ancestors': doc, 'parentId': doc['_id']}
//     }
// );