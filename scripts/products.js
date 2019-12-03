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
    // onSale: Boolean,
    //imageFiles: [{String}],
    // sizes: [{Number}],
    function getRandomNum(max, min){
        return Math.random() * (max - min) + min;
    }
    var hipsum = 'Lorem ipsum dolor amet vaporware listicle pitchfork brooklyn. Church-key kogi leggings cold-pressed gentrify taiyaki pabst hammock echo park beard pinterest. Seitan whatever photo booth sriracha, cred drinking vinegar pabst pork belly franzen distillery intelligentsia brooklyn lo-fi post-ironic.',
        hipsum2 = 'Kale chips brunch af skateboard fam microdosing, cloud bread copper mug gochujang. Post-ironic pitchfork gochujang, keytar photo booth chia franzen. Gastropub offal brunch franzen edison bulb fashion axe ugh keytar direct trade mumblecore artisan celiac fixie. Hella photo booth helvetica blue bottle.',
        hipsum3 = 'Swag tacos gastropub stumptown. PBR&B chillwave offal knausgaard you probably haven\'t heard of them, succulents photo booth 90\'s. Food truck chartreuse microdosing VHS man braid. Whatever jean shorts woke wayfarers, glossier microdosing forage.',
        hipsum4 = 'Meditation heirloom trust fund synth sriracha vegan unicorn microdosing locavore stumptown letterpress sartorial brooklyn cornhole. La croix literally messenger bag, vice hashtag flexitarian 90\'s hot chicken kinfolk hexagon. Hammock microdosing lo-fi master cleanse austin four loko sriracha. Woke la croix you probably haven\'t heard of them skateboard before they sold out craft beer.',
        hipsum5 = 'Farm-to-table craft beer af green juice, fashion axe everyday carry etsy hella marfa tousled cred salvia hashtag activated charcoal. Asymmetrical biodiesel tofu echo park vinyl. Retro ramps knausgaard sustainable. Fam crucifix kogi brooklyn. DIY lyft woke biodiesel raclette chambray helvetica poke.',
        hipsum6 = 'Mlkshk sriracha put a bird on it vinyl keffiyeh, pok pok gentrify iPhone flannel. Food truck next level cray copper mug af tacos, tote bag craft beer mixtape ennui shaman succulents whatever.',
        hipsum7 = 'Normcore four loko mixtape synth aesthetic heirloom sriracha put a bird on it tbh williamsburg locavore 90\'s disrupt. Meditation heirloom trust fund synth sriracha vegan unicorn microdosing locavore stumptown letterpress sartorial brooklyn cornhole. La croix literally messenger bag, vice hashtag flexitarian 90\'s hot chicken kinfolk hexagon.';
        //Get category IDs
    var descArr = [
        hipsum,
        hipsum2,
        hipsum3,
        hipsum4,
        hipsum5,
        hipsum6,
        hipsum7,
    ];

    var men = db.categories.findOne({slug: 'category-men'}),
        women = db.categories.findOne({slug: 'category-women'}),
        kids = db.categories.findOne({slug: 'category-kids'}),
        skate = db.categories.findOne({slug: 'category-skateboard'}),
        lifestyle = db.categories.findOne({slug: 'category-lifestyle'}),
        basket = db.categories.findOne({slug: 'category-basketball'}),
        run = db.categories.findOne({slug: 'category-running'}),
        gym = db.categories.findOne({slug: 'category-training-gym'}),
        girls = db.categories.findOne({slug: 'category-girls'}),
        boys = db.categories.findOne({slug: 'category-boys'});

    var menId = men["_id"],
        womenId = women["_id"],
        kidsId = kids["_id"],
        skateId = skate["_id"],
        lifeId = lifestyle["_id"],
        basketId = basket["_id"],
        runId = run["_id"],
        gymId = gym["_id"],
        girlsId = girls["_id"],
        boysId = boys["_id"];

    //001
    var snkr01 = {
        slug: 'road-warrior-low',
        sku: 'PROD0000-0001',
        modelName: 'Road Warrior Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 129.99,
            sale: 109.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: lifeId,
        categories: [menId, kidsId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather/mesh',
            colors: ['blue/gray/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-005-tn.png',
            thumbnail: 'sneakers-001-tn.jpg',
            large: 'sneakers-001.jpg',
        },
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        key: 'Product',
    };

    //002
    var snkr02 = {
        slug: 'python-tech-low',
        sku: 'PROD0000-0002',
        modelName: 'Python Tech Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 199.99,
            sale: 179.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: lifeId,
        categories: [menId, womenId, kidsId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather/mesh',
            colors: ['green/black',],
        },
        imageFiles:{
            // tiny: 'sneakers-005-tn.png',
            thumbnail: 'sneakers-002-tn.jpg',
            large: 'sneakers-002.jpg',
        },
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        key: 'Product',
    };

    //004
    var snkr04 = {
        slug: 'trainer-low',
        sku: 'PROD0000-0004',
        modelName: 'Trainer Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 89.99,
            sale: 79.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: lifeId,
        categories: [menId, womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather/suede',
            colors: ['black/red/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-005-tn.png',
            thumbnail: 'sneakers-004-tn.jpg',
            large: 'sneakers-004.jpg',
        },
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        key: 'Product',
    };

    //005
    var snkr05 = {
        slug: 'classic-taylors',
        sku: 'PROD0000-0005',
        modelName: 'Chuck Taylor Classic',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 79.99,
            sale: 69.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: lifeId,
        categories: [menId, womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Cotton canvas',
            colors: ['red/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-005-tn.png',
            thumbnail: 'sneakers-005-tn.png',
            large: 'sneakers-005.png',
        },
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        key: 'Product',
    };

    //006
    var snkr06 = {
        slug: 'force-runner-lo',
        sku: 'PROD0000-0006',
        modelName: 'Force Runner Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: true,
        pricing: {
            reg: 109.99,
            sale: 89.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: runId,
        categories: [menId, womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather',
            colors: ['orange/black/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-006-tn.png',
            thumbnail: 'sneakers-006-tn.png',
            large: 'sneakers-006.png',
        },
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        key: 'Product',
    };

    ///007
    var snkr07 = {
        slug: 'athena-runner-lo',
        sku: 'PROD0000-0007',
        modelName: 'Athena Runner Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: true,
        pricing: {
            reg: 119.99,
            sale: 99.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: runId,
        categories: [womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Cordura canvas, Leather',
            colors: ['lilac/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-007-tn.jpg',
            thumbnail: 'sneakers-007-tn.jpg',
            large: 'sneakers-007.jpg',
        },
        sizes: [8, 8.5, 9, 9.5, 10, 10.5,],
        key: 'Product',
    };

    //008
    var snkr08 = {
        slug: 'redrum-runner-lo',
        sku: 'PROD0000-0008',
        modelName: 'Redrum Runner Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: true,
        pricing: {
            reg: 119.99,
            sale: 99.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: runId,
        categories: [menId, womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Cordura canvas, Leather',
            colors: ['red/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-008-tn.jpg',
            thumbnail: 'sneakers-008-tn.jpg',
            large: 'sneakers-008.jpg',
        },
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //010
    var snkr10 = {
        slug: 'street-cred-hi',
        sku: 'PROD0000-0010',
        modelName: 'Street Cred Hi',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: true,
        pricing: {
            reg: 129.99,
            sale: 109.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: basketId,
        categories: [menId, womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather',
            colors: ['black/gray/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-010-tn.jpg',
            thumbnail: 'sneakers-010-tn.jpg',
            large: 'sneakers-010.jpg',
        },
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //011
    var snkr11 = {
        slug: 'taylors-denim-lo',
        sku: 'PROD0000-0011',
        modelName: 'Taylors Denim Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: true,
        pricing: {
            reg: 89.99,
            sale: 79.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: lifeId,
        categories: [menId, womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Cotton Canvas',
            colors: ['dark blue/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-011-tn.jpg',
            thumbnail: 'sneakers-011-tn.jpg',
            large: 'sneakers-011.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //012
    var snkr12 = {
        slug: 'taylors-independence-low',
        sku: 'PROD0000-0012',
        modelName: 'Taylors Independence Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: true,
        pricing: {
            reg: 89.99,
            sale: 79.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: basketId,
        categories: [menId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Cotton Canvas',
            colors: ['red/white/blue/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-012-tn.jpg',
            thumbnail: 'sneakers-012-tn.jpg',
            large: 'sneakers-012.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //013
    var snkr13 = {
        slug: 'predator-runner-low',
        sku: 'PROD0000-0013',
        modelName: 'Taylors Independence Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 129.99,
            sale: 109.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: runId,
        categories: [menId, womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Mesh/Leather',
            colors: ['green/black/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-013-tn.jpg',
            thumbnail: 'sneakers-013-tn.jpg',
            large: 'sneakers-013.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //014
    var snkr14 = {
        slug: 'ice-low',
        sku: 'PROD0000-0014',
        modelName: 'Ice Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: true,
        pricing: {
            reg: 129.99,
            sale: 109.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: gymId,
        categories: [menId, womenId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Mesh/Leather',
            colors: ['ice blue/black/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-014-tn.jpg',
            thumbnail: 'sneakers-014-tn.jpg',
            large: 'sneakers-014.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //015
    var snkr15 = {
        slug: 'astro-high',
        sku: 'PROD0000-0015',
        modelName: 'Astro High',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: true,
        pricing: {
            reg: 169.99,
            sale: 149.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: lifeId,
        categories: [menId, womenId, girlsId, boysId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Mesh/Leather/Velcro',
            colors: ['gray/yellow/fuchsia/coral',],
        },
        imageFiles:{
            // tiny: 'sneakers-015-tn.jpg',
            thumbnail: 'sneakers-015-tn.jpg',
            large: 'sneakers-015.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //016
    var snkr16 = {
        slug: 'league-pro-high',
        sku: 'PROD0000-0016',
        modelName: 'League Pro High',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 169.99,
            sale: 149.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: basketId,
        categories: [menId, womenId, girlsId, boysId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather/Velcro',
            colors: ['blue/gold/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-016-tn.jpg',
            thumbnail: 'sneakers-016-tn.jpg',
            large: 'sneakers-016.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //017
    var snkr17 = {
        slug: 'iceblue-limited-low',
        sku: 'PROD0000-0017',
        modelName: 'Iceblue Limited Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 169.99,
            sale: 149.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: runId,
        categories: [menId, womenId, girlsId, boysId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather/Velcro',
            colors: ['ice blue/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-017-tn.jpg',
            thumbnail: 'sneakers-017-tn.jpg',
            large: 'sneakers-017.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //018
    var snkr18 = {
        slug: 'air-attack-mid',
        sku: 'PROD0000-0018',
        modelName: 'Air Attack Mid',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 139.99,
            sale: 119.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: basketId,
        categories: [menId, womenId, girlsId, boysId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather',
            colors: ['red/gray/white',],
        },
        imageFiles:{
            // tiny: 'sneakers-018-tn.jpg',
            thumbnail: 'sneakers-018-tn.jpg',
            large: 'sneakers-018.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //019
    var snkr19 = {
        slug: 'streetside-mid',
        sku: 'PROD0000-0019',
        modelName: 'Streetside Mid',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 139.99,
            sale: 119.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: lifeId,
        categories: [menId, womenId, girlsId, boysId],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather',
            colors: ['red/red',],
        },
        imageFiles:{
            // tiny: 'sneakers-019-tn.jpg',
            thumbnail: 'sneakers-019-tn.jpg',
            large: 'sneakers-019.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        key: 'Product',
    };

    //020
    var snkr20 = {
        slug: 'track-low',
        sku: 'PROD0000-0020',
        modelName: 'Track Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 139.99,
            sale: 119.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: runId,
        categories: [womenId, girlsId,],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather',
            colors: ['shocking pink/light purple',],
        },
        imageFiles:{
            // tiny: 'sneakers-020-tn.jpg',
            thumbnail: 'sneakers-020-tn.jpg',
            large: 'sneakers-020.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,],
        key: 'Product',
    };

    //021
    var snkr21 = {
        slug: 'arrow-low',
        sku: 'PROD0000-0021',
        modelName: 'Arrow Low',
        desc: descArr[getRandomNum(8, 0)],
        totalReviews: 0,
        avgReview: null,
        isOnSale: false,
        pricing: {
            reg: 109.99,
            sale: 99.99,
            from: new Date('October 2, 2019'),
            to: new Date(Date.now()),
        },
        priceHistory: [
            {
                reg: 99.99,
                sale: 89.99,
                from: new Date('August 15, 2019'),
                to: new Date('October 1, 2019'),
            }
        ],
        primaryCategory: runId,
        categories: [womenId, girlsId,],
        details: {
            sole: 'Synthetic rubber',
            upper: 'Leather',
            colors: ['silver/blue/neon yellow',],
        },
        imageFiles:{
            // tiny: 'sneakers-running-tn.jpg',
            thumbnail: 'sneakers-running-tn.jpg',
            large: 'sneakers-020.jpg',
        },
        sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,],
        key: 'Product',
    };

    //Insert into db
    db.products.insertMany(
        [
            snkr05,
            snkr06,
            snkr07,
            snkr08,
            snkr10,
            snkr11,
            snkr12,
            snkr13,
            snkr14,
            snkr15,
            snkr16,
            snkr17,
            snkr18,
            snkr19,
            snkr20,
            snkr21,
        ]
    );

    /**********************END SCRIPT*****************************/