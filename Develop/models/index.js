// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { put } = require('../routes');


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
// Define the third table needed to store the foreign keys
through: ProductTag,
foreignKey: "product_id"
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  foreignKey: "tag_id"
  });

  // Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
  });
  
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
