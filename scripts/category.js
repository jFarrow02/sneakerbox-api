//const collectionName = 'categories';

var ath =
    {
        slug: 'category-athletic',
        name: 'Athletic',
        desc: 'Sneakers designed for maximum athletic performance.',
        parentId: [],
        ancestors: [],
    };

var life =
    {
        slug: 'category-lifestyle',
        name: 'Lifestyle',
        desc: 'You want to look good. We want you to look good. Wear these sneakers and everyone gets what they want.',
        parentId: [],
        ancestors: [],
    };

var run =
    {
        slug: 'category-running',
        name: 'Running',
        desc: 'Whether you\'re a casual jogger or a hard-core marathoner, these sneakers will fit the bill.',
        parentId: [],
        ancestors: [],
    };

var basket =
    {
        slug: 'category-basketball',
        name: 'Basketball',
        desc: 'Sneakers to give you the edge on the court.',
        parentId: [],
        ancestors: [],
    };

var skate =
    {
        slug: 'category-skateboard',
        name: 'Skateboard',
        desc: 'Board shoes maximized for performance on your deck of choice.',
        parentId: [],
        ancestors: [],
    };


db.categories.insertMany(
    [
        ath, life, run, basket, skate
    ]
);

var e = db.categories.find({name: 'Athletic'});
var eArr = e.toArray();
var doc = eArr[0];

db.categories.updateMany(
    {name :
        {
            $in: ['Running', 'Basketball', 'Skateboard']
        }
    },
    {
        $push: { 'ancestors': doc, 'parentId': doc['_id']}
    }
);