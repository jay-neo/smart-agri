const { Schema, model } = require("mongoose");

const dataSchema = new Schema({
    thingspeakChannel: {
        type: String,
        default: null,
    },
    thingspeakAPI: {
        type: String,
        default: null,
    },
    lastItteration: {
        type: Number,
        default: 0,
    },
    calcGap: {
        type: Number,
        default: 2,
    },
    fieldData: {
        type : Array, 
        default : [],
    },
}, {
    timestamps: true
});

const Data = model("Data", dataSchema);

module.exports = {
    Data,
};
