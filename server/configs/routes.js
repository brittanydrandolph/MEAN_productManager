const product = require("../controllers/controller");
const path = require("path")

module.exports = function(app){
    app.get("/products", product.index)
    app.delete("/delete/:id", product.deleteProduct)
    app.get("/products/edit/:id", product.details)
    app.put("/products/:id", product.editProduct)
    app.post("/products", product.addProduct)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
}