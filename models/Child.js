const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const childSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    profile_pic: { type: String, default: '/images/default_user.png' },
    birthday: { type: Date },
    availabledays: [{ type: String }],
    foodlikes: { type: [String] },
    fooddislikes: { type: [String] },
    allergies: { type: [String] },
    activitylikes: { type: [String] },
    activitydislikes: { type: [String] },
    caretaker: [{ type: ObjectId, ref: "caretakers"}] 
});

const Child = mongoose.model("friends", childSchema);
module.exports = Child;