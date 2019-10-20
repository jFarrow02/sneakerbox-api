/***SCHEMA***/
    // _id: ObjectId,
    // slug: String,
    // sku: String,
    // modelName: String,
    // desc: String,
    // totalReviews: Number,
    // avgReview: Number,
    // pricing: Object,
    // priceHistory: Object,
    // primaryCategory: ObjectId,
    // categories:[ObjectId],
    // tags: [String],
    // details: Object,
    // onSale: Boolean

    var p = db.categories.find({slug: 'Athletic'});

    var t = {
        slug: 'test-sneaker-hi',
        sku: 'PROD01234-56789',
        modelName: 'Test Sneaker Hi',
        desc: 'This is a test sneaker.',
        totalReviews: 0,
        avgReview: null,
        pricing: {
            reg: 99.99,
            sale: 79.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: {
            reg: 99.99,
            sale: 89.99,
            from: new Date('August 15, 2019'),
            to: new Date('October 1, 2019'),
        },
        primaryCategory: p["_id"],
        categories: [],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather',
            colors: ['black/red', 'red/white', 'white/white'],
        }
    };

    db.products.insertOne(t);