const Sale = require('../models/sale');
const {ObjectId} = require('bson');

exports.getAll = (req, res, next) => {
    Sale
        .find()
        .limit(40)
        .exec((err, sales) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(sales);
            }
        })
};

exports.getById = (req, res , next) => {
    Sale
        .findById(req.params.id)
        .exec((err, sale) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(sale);
            }
        })

};

exports.add = (req, res ,next) => {
    new Sale(req.body).save((err, sale) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(sale);
        }
    })
};

exports.updateById = (req, res , next) => {
    Sale
        .updateOne({ _id: new ObjectId(req.params.id)} , req.body ,{new:true})
        .exec((err, data) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(data);
            }
        })

};
exports.deleteById = (req, res , next) => {
    Sale
        .deleteOne({ _id: new ObjectId(req.params.id)})
        .exec((err, data) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(data);
            }
        })

};