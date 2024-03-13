import {Schema, model} from "./globals"
import * as mongoose from "./globals";

const ItemSchema = new Schema({
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

module.exports = mongoose.model("Item", ItemSchema);
