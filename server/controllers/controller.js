const mongoose = require("mongoose")
const Product = mongoose.model("Products")

//only need to import one model

module.exports = {
    index: function(req,res){
        Product.find()
            .then(data => res.json({info: data, message: "Success at the index page in controller"}))
            .catch(err => res.json({info: err, message: "Error at the index page in controller"}))
    },
    deleteProduct: function(req,res){
        let id = req.params.id;
        Product.remove({_id:id})
            .then(deleted => res.json({info: deleted, message: "Success at the deleteProduct in controller"}))
            .catch(err => res.json({info: err, message: "Error at the deleteProduct page in controller"}))
    },
    details: function(req,res){
        let id = req.params.id;
        Product.findById(req.params.id)
            .then(data => res.json({info: data, message: "Successfully found product at the details in controller"}))
            .catch(err => res.json({info: err, message: "Error at the details page in controller"}))
    },
    editProduct: function(req, res){
        let id = req.params.id;
        Product.findById(id, function(err, product){
            if(err){
                res.json({message: "errors in controller edit product", info: err})
            }
            else{
                product.title = req.body.title;
                product.price = req.body.price;
                product.image = req.body.image;
                product.save({ runValidators: true }, function(err){
                    if(err){
                        res.json({message: "errors in saving", info: err});
                    }
                    else{
                        res.json({message: "success in saving", info: product})
                    }
                })
            }
        })
    },

    addProduct: function(req,res){
        Product.create({title: req.body.title, price: req.body.price, image: req.body.image})
            .then(created => res.json({info: created, message: "successfully created a product"}))
            .catch(err =>res.json ({info: err, message: "failure to make a new product"}))
    }
}