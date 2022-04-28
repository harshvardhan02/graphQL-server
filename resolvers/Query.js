const { allProducts, categories } = require("../db");

exports.Query = {
  hello: () => {
    return ["Harshvardhan", "Singh", "Baghel"];
  },
  products: () => allProducts,
  // resolver has 3 parameters parent, args and context
  product: (parent, args, context) => {
    const { id } = args;
    return product = allProducts.find(product => product.id === id);
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find(category => category.id === id);
  }
}