const path = require('path');
const DB = require(path.resolve('/sneakerbox', 'services', 'db', 'index'));

class Review{

    /***SCHEMA***/
    // _id: ObjectId,
    // productId: ObjectId,
    // date: Date,
    // title: String,
    // text: String,
    // rating: Number,
    // userId: ObjectId,
    // username: String,
    // upvotes: Number,
    // downvotes: Number,
    // voterIds: [ObjectId],

    constructor(reviewObj){
        let keys = Object.getOwnPropertyNames(reviewObj);
        keys.forEach((key)=>{
            if(key !== '_id' && key!== 'date'){
                this[key] = reviewObj[key];
            }
        });
        this.date = new Date(Date.now());
        this.upvotes = 0;
        this.downvotes = 0;
    }
}

module.exports = Review;