exports.Query = {
  hello: () => {
    return ["Harshvardhan", "Singh", "Baghel"];
  },
  products: (parent, args, context) => {
    const { allProducts } = context;
    const { filter } = args;
    let filterProduct = allProducts;
    if (filter) {
      if (filter.onSale === true) {
        filterProduct = allProducts.filter(product => {
          return product.onSale
        });
      }
    }
    return filterProduct;
  },
  // query {
  //   products(filter: { onSale: true }) {
  //     name
  //     onSale
  //   }
  // }
  // resolver has 3 parameters parent, args and context
  product: (parent, args, context) => {
    const { allProducts } = context;
    const { id } = args;
    return product = allProducts.find(product => product.id === id);
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { categories } = context;
    const { id } = args;
    return categories.find(category => category.id === id);
  }
}