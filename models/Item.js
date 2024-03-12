const {
    Schema,
    model
} = require("mongoose");

const MySchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const TaskModel = module.exports = model("User", MySchema);

module.exports = TaskModel
