const { categories } = require("../db");

exports.Product = {
  category: (parent, args, context) => {
    const { categoryID } = parent;
    return categories.find(category => category.id === categoryID);
  }
}